import {
  OrderDirection,
  PageInfo,
  useGetPartialProductsDataQuery,
} from "@generated/api";
import ProductCard from "@components/product/product-card/ProductCard";
import Spinner from "@components/spinner/Spinner";
import Pagination from "@components/pagination/Pagination";
import Modal from "@components/modal/Modal";
import { ProductsProps } from "@root/types/types";
import classes from "./Products.module.scss";

export default function Products({ keyword, numberOfProductsToDisplay, sortBy }: ProductsProps) {
  const { loading, error, data, fetchMore } = useGetPartialProductsDataQuery({
    variables: {
      first: numberOfProductsToDisplay,
      filter: { search: keyword },
      sortBy: {
        field: sortBy,
        direction: OrderDirection.Asc,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Spinner />;
  if (error) return <Modal>Could not fetch data. Please try again later.</Modal>;

  if (data) {
    const products: any[] = data.products?.edges || [];
    const totalCount: number = data.products?.totalCount || 0;
    const pageInfo: PageInfo = data.products?.pageInfo || ({} as PageInfo);

    const onLoadMore = () => {
      fetchMore({
        variables: {
          after: pageInfo?.endCursor,
        },
      });
    };

    return (
      <section id="main">
        <ul className={classes.products}>
          {products.map(({ node: product }) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
        {pageInfo?.hasNextPage && (
          <Pagination
            onLoadMore={onLoadMore}
            itemCount={products.length}
            totalCount={totalCount || NaN}
          />
        )}
      </section>
    );
  }
  return null;
}
