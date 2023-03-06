import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Rating from "../rating/Rating";
import classes from "./ProductCard.module.scss";
import { productUnavailable } from "constants/constants";
import { Product, Money } from "@generated/api";

export default function ProductCard({ product }: { product: Product }) {
  const { name, rating = 0, thumbnail, category, slug, pricing } = product || [];

  const grossMoney: Money | undefined = pricing?.priceRange?.start?.gross;

  const productPrice: string = grossMoney?.amount
    ? `${grossMoney?.amount} ${grossMoney?.currency}`
    : "";

  const mainImageSource: string | StaticImageData = thumbnail?.url || productUnavailable;

  return (
    <li className={classes.product}>
      <Link className={classes["product-details"]} href={`/product/${slug}`}>
        <Image
          className={classes["product-image"]}
          width={200}
          height={200}
          src={mainImageSource}
          alt={name}
        />
        <div className={classes["product-description"]}>
          <p className={classes["product-description__name"]}>{name}</p>
          <p className={classes["product-description__category"]}>{category?.name}</p>
          <strong>{productPrice}</strong>
          <br />
          <Rating productRating={rating} />
        </div>
      </Link>
    </li>
  );
}
