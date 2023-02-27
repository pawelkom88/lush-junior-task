import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Rating from "@components/product/rating/Rating";
import Thumbnail from "@components/product/thumbnail/Thumbnail";
import CartButton from "./cart-button/CartButton";
import { productUnavailable, notAvailable } from "constants/constants";
import { createSanitizedMarkup } from "utils/utils";
import { ProductBySlugQuery } from "@generated/api";
import { ProductDescription } from "types/types";
import classes from "./product.module.scss";

type ProductPrice = { __typename?: "Money"; amount: number; currency: string } | undefined;

export default function Product({ product }: ProductBySlugQuery) {
  const { name, media, description, rating, pricing, weight, isAvailable } = product || {};

  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    media?.[0]?.url || productUnavailable
  );

  const productDescription: ProductDescription[] = JSON.parse(description).blocks;

  const productWeightWithUnit: string = weight ? `${weight.value} ${weight.unit}` : notAvailable;

  const productPrice: ProductPrice = pricing?.priceRange?.start?.gross;

  const productAmountWithCurrency: string = productPrice
    ? `${productPrice.amount} ${productPrice.currency}`
    : notAvailable;

  return (
    <section>
      <Link className={classes["homepage-link"]} href="/">
        Back to products
      </Link>
      <article className={classes.product}>
        <div className={classes["product-wrapper"]}>
          <div className={classes["product-image"]}>
            <Image width={600} height={200} src={selectedImage} alt={name || ""} />
          </div>
          <Thumbnail alt={name || ""} media={media} onSelectedImage={setSelectedImage} />
        </div>
        <div className={classes["product-details"]}>
          <h1 className={classes["product-details__name"]}>{name}</h1>
          <Rating productRating={rating} />
          <div className={classes["product-details__info"]}>
            <strong>{productAmountWithCurrency}</strong>
            <strong>
              Weight: <span>{productWeightWithUnit}</span>
            </strong>
          </div>
          <>
            {productDescription?.map(({ id, data }: any) => {
              return <p key={id} dangerouslySetInnerHTML={createSanitizedMarkup(data.text)} />;
            })}
          </>
          <p className={classes["product-details__availability"]}>
            {isAvailable ? "in stock" : "Unavailable"}
          </p>
          {productPrice?.amount ? <CartButton /> : ""}
        </div>
      </article>
    </section>
  );
}
