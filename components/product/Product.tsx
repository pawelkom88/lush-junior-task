import Image from "next/image";
import Link from "next/link";
import classes from "./Product.module.scss";

type ProductProps = {
  product: {
    name: string;
    thumbnail: {
      url: string;
    };
    slug: string;
  };
};

export default function Product({ product }: ProductProps) {
  const { name, thumbnail, category, slug, media, pricing } = product;

  const amount = pricing?.priceRange.start.gross;
  const price = amount.amount;
  const deduction = pricing?.discount === null ? 0 : pricing?.discount.gross.amount;

  const PriceAfterDiscount = price - deduction;
  const PriceBeforeDiscount = price + deduction;
  const currency = amount.currency;
  const discountedPrice =
    PriceBeforeDiscount === PriceAfterDiscount ? "" : `${PriceAfterDiscount} ${currency}`;

  const imageSrc = thumbnail ? thumbnail?.url : "/public/images/PRODUCT-UNAVAILABLE.png";

  return (
    <li className={classes.product}>
      <div className={classes["product-image"]}>
        <Image width={200} height={200} src={imageSrc} alt={name as string} />
      </div>
      <div className={classes["product-description"]}>
        <p className={classes["product-name"]}>{name.split("-")}</p>
        <p className={classes["product-description"]}>{category?.name}</p>
        <s>{discountedPrice}</s>
        <p>{`${PriceAfterDiscount} ${currency}`}</p>
      </div>
      <Link className={classes["product-details"]} href={`/product/${slug}`}>
        details
      </Link>
    </li>
  );
}
