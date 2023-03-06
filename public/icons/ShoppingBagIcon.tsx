import Link from "next/link";

export default function ShoppingBagIcon({ size = 25 }) {
  return (
    <Link href="/checkout">
      <svg aria-label="go to checkout" role="img" width={size} viewBox="0 0 16 16">
        <title>go to checkout</title>
        <path d="M15.07 5.023h-2.452V4.54a4.617 4.617 0 0 0-9.233 0v.482H.93L-.072 16h16.144zM4.883 4.54a3.118 3.118 0 0 1 6.233 0v.482H4.883zM1.572 14.5l.73-7.977h11.4l.73 7.977z"></path>
      </svg>
    </Link>
  );
}
