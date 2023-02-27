import { useProductBySlugQuery, GetProductsDocument, GetProductsQuery } from "@generated/api";
import Spinner from "@components/spinner/Spinner";
import Modal from "@components/modal/Modal";
import Product from "@components/product/Product";
import { numberOfProductsToFetch } from "constants/constants";
import { client } from "../client/client";

export default function ProductPage({ slug }: { slug: string }) {
  const { loading, error, data } = useProductBySlugQuery({ variables: { slug } });

  if (loading) return <Spinner />;
  if (error) return <Modal>Could not fetch data. Please try again later.</Modal>;

  if (data) {
    return <Product product={data.product} />;
  }
  return null;
}

export async function getStaticPaths() {
  const { data } = await client.query<GetProductsQuery>({
    query: GetProductsDocument,
    variables: {
      first: numberOfProductsToFetch,
    },
  });

  const paths = data.products?.edges.map(({ node: { slug } }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return {
    props: {
      slug: params?.slug,
    },
  };
}
