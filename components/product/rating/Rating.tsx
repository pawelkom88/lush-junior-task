import Star from "@root/public/icons/Star";

export default function Rating({ productRating }: { productRating: null | undefined | number }) {
  let rating;

  if (productRating) {
    rating = productRating > 5 ? 5 : Math.ceil(productRating);
  }

  const customerRating: number[] = new Array(rating).fill(0);

  return (
    <div style={{ margin: ".5rem" }}>
      {(rating as number) ? (
        customerRating.map((_, index) => <Star key={index} />)
      ) : (
        <p>This item has not been rated yet</p>
      )}
    </div>
  );
}
