import Star from "@root/public/icons/Star";

export default function Rating({ productRating = 0 }: { productRating: number }) {
  const customerProductRating: number = Math.ceil(Math.min(productRating, 5));

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
