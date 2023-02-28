import { useState } from "react";
import { OrderDirection, PageInfo, ProductOrderField, useGetProductsQuery } from "@generated/api";
import NumberOfProductToDisplaySelect from "@components/pages-select/NumberOfProductToDisplaySelect";
import ProductSortSelect from "@components/sorting-element/ProductSortSelect";
import ProductCard from "@components/product/product-card/ProductCard";
import Spinner from "@components/spinner/Spinner";
import Pagination from "@components/pagination/Pagination";
import Modal from "@components/modal/Modal";
import classes from "./Products.module.scss";
import { numberOfProductsToFetch } from "constants/constants";

export default function Products({ keyword }: { keyword: string }) {
  const [numberOfProductsToDisplay, setNumberOfProductsToDisplay] =
    useState<number>(numberOfProductsToFetch);

  const [sortBy, setSortBy] = useState<string>(ProductOrderField.Name);

  const { loading, error, data, fetchMore } = useGetProductsQuery({
    variables: {
      first: numberOfProductsToDisplay,
      filter: { search: keyword },
      sortBy: {
        field: sortBy as ProductOrderField,
        direction: OrderDirection.Asc,
      },
    },
  });

  if (loading) return <Spinner />;
  if (error) return <Modal>Coul not fetch data. Please try again later.</Modal>;

  if (data) {
    const products: any[] = data?.products?.edges || [];
    const total: number | null | undefined = data?.products?.totalCount;
    const pageInfo: PageInfo | undefined = data.products?.pageInfo;

    const onFetchMoreProducts = () => {
      fetchMore({
        variables: {
          after: pageInfo?.endCursor,
        },
      });
    };

    return (
      <section id="products">
        <p className={classes["product-total"]}>Available products: {total}</p>
        <div className={classes["select-wrapper"]}>
          <ProductSortSelect value={sortBy} onSortBy={setSortBy} />
          <NumberOfProductToDisplaySelect
            value={numberOfProductsToDisplay}
            onProductToDisplayChange={setNumberOfProductsToDisplay}
          />
        </div>
        <ul className={classes.products}>
          {products.map(({ node: product }) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
        {pageInfo?.hasNextPage && <Pagination onFetchMoreProducts={onFetchMoreProducts} />}
      </section>
    );
  }
  return null;
}
