import { useState } from "react";
import { OrderDirection, ProductOrderField, useGetProductsQuery } from "@generated/api";
import PagesSelect from "@components/pages-select/PagesSelect";
import SortingElement from "@components/sorting-element/SortingElement";
import ProductCard from "@components/product/product-card/ProductCard";
import Spinner from "@components/spinner/Spinner";
import Modal from "@components/modal/Modal";
import classes from "./Products.module.scss";
import { numberOfProductsToFetch } from "constants/constants";

type ProductsProps = {
  keyword: string;
};

export default function Products({ keyword }: ProductsProps) {
  const [sortBy, setSortBy] = useState<string>(ProductOrderField.Name);
  const { loading, error, data } = useGetProductsQuery({
    variables: {
      first: numberOfProductsToFetch,
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

    return (
      <section id="products">
        <p className={classes["product-total"]}>Available products: {total}</p>
        <div className={classes["select-wrapper"]}>
          <SortingElement value={sortBy} onSortBy={setSortBy} />
          <PagesSelect />
        </div>
        <ul className={classes.products}>
          {products.map(({ node: product }) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
      </section>
    );
  }
  return null;
}
