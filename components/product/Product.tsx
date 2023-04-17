import router from "next/router";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Rating from "@components/product/rating/Rating";
import Thumbnail from "@components/product/thumbnail/Thumbnail";
import Button from "../button/Button";
import { productUnavailable, notAvailable } from "constants/constants";
import { createSanitizedMarkup } from "utils/utils";
import { ProductBySlugQuery, useProductAddVariantToCartMutation } from "@generated/api";
import { ProductDescription } from "types/types";
import { useLocalStorage } from "react-use";
import classes from "./Productt.module.scss";

type ProductPrice = { amount: number; currency: string } | undefined;

export default function Product({ product }: ProductBySlugQuery) {
  const [token] = useLocalStorage("token");
  const [addProductToCart] = useProductAddVariantToCartMutation();

  const { name = "", media, description, rating = 0, pricing, weight, isAvailable } = product || {};

  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    media?.[0]?.url || productUnavailable
  );

  const selectedVariantID: string = product?.variants?.[0]?.id ?? "";

  async function onAddToCart() {
    await addProductToCart({
      variables: { checkoutToken: token, variantId: selectedVariantID as string },
    });
  }

  const productDescription: ProductDescription[] = JSON.parse(description)?.blocks;

  const productWeightWithUnit: string = weight ? `${weight.value} ${weight.unit}` : notAvailable;

  const productPrice: ProductPrice = pricing?.priceRange?.start?.gross;

  const productAmountWithCurrency: string = productPrice
    ? `${productPrice.amount} ${productPrice.currency}`
    : notAvailable;

  return (
    <section id="main">
      <Link className={classes["homepage-link"]} href="/">
        Back to products
      </Link>
      <article className={classes.product}>
        <div className={classes["product-wrapper"]}>
          <div className={classes["product-image"]}>
            <Image width={600} height={200} src={selectedImage} alt={name} />
          </div>
          <Thumbnail alt={name} media={media} onSelectedImage={setSelectedImage} />
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
            {isAvailable ? (
              <span className={classes["product-available"]}>in stock</span>
            ) : (
              <span className={classes["product-unavailable"]}>unavailable</span>
            )}
          </p>
          {productPrice?.amount ? <Button onClick={onAddToCart}>Add to cart</Button> : null}
        </div>
      </article>
    </section>
  );
}
