import { client } from "../client/client";
import { useProductBySlugQuery, GetProductsDocument, GetProductsQuery } from "@generated/api";
import { numberOfProducts } from "@utils/utils";

type ProductTypeProps = {
  slug: string;
};

export default function ProductPage({ slug }: ProductTypeProps) {
  const { loading, error, data } = useProductBySlugQuery({ variables: { slug } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (data) {
    const { product } = data;

    return <div>{product?.name}</div>;
  }
}


// If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.
export async function getStaticPaths() {
  const { data } = await client.query<GetProductsQuery>({
    query: GetProductsDocument,
    variables: {
      first: numberOfProducts,
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

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params?.slug,
    },
  };
}
