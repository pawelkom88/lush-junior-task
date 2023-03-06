import { Maybe } from "@generated/api";
import Star from "@root/public/icons/Star";

export default function Rating({ productRating }: { productRating: Maybe<number> }) {
  const customerProductRating: number = Math.ceil(Math.min(productRating as number, 5));

  return (
    <div style={{ margin: ".5rem" }}>
      {customerProductRating ? (
        new Array(customerProductRating).fill(null).map((_, index) => <Star key={index} />)
      ) : (
        <p>This item has not been rated yet</p>
      )}
    </div>
  );
}
