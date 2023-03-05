import { useCheckoutRemoveProductMutation } from "@generated/api";
import Link from "next/link";
import Image from "next/image";
import { useLocalStorage } from "react-use";
import Button from "@components/button/Button";
import classes from "./CartList.module.scss";

export default function CartList({ products }: { products: any[] }) {
  const [token] = useLocalStorage("token");
  const [CheckoutremoveProduct] = useCheckoutRemoveProductMutation();

  function onCheckoutRemoveProduct(lineID: string) {
    CheckoutremoveProduct({
      variables: {
        checkoutToken: token,
        lineId: lineID,
      },
    });
  }

  return (
    <ul className={classes.wrapper}>
      {products.map(line => {
        const product = line?.variant?.product;
        const { name, slug, thumbnail } = product;
        const price = line?.totalPrice?.gross;
        const lineID = line?.id || "";

        return (
          <>
            <li className={`${classes["cart-item"]} ${classes.line}`} key={lineID}>
              <div className={classes["cart-item"]}>
                <Image
                  width={70}
                  height={70}
                  src={thumbnail?.url || ""}
                  alt={thumbnail?.alt || ""}
                />
                <div>
                  <h3>
                    <Link href={`/product/${slug}`}>{name}</Link>
                  </h3>
                  <p>
                    {price?.amount} {price?.currency}
                  </p>
                </div>
              </div>
              <Button onClick={() => onCheckoutRemoveProduct(lineID)}>Remove</Button>
            </li>
          </>
        );
      })}
    </ul>
  );
}
