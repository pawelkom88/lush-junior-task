import Modal from "@components/modal/Modal";
import Spinner from "@components/spinner/Spinner";
import { CheckoutLine, useCheckoutFetchByTokenQuery } from "@generated/api";
import { useLocalStorage } from "react-use";
import Layout from "@components/layout/Layout";
import CartList from "@components/cart-list/CartList";
import Button from "@components/button/Button";
import classes from "./Checkout.module.scss";

export default function Checkout() {
  const [token] = useLocalStorage("token");
  const { data, loading, error } = useCheckoutFetchByTokenQuery({
    variables: { checkoutToken: token },
    skip: !token,
  });

  if (loading) return <Spinner />;
  if (error) return <Modal>Could not fetch data. Please try again later.</Modal>;

  if (data) {
    const products: any[] = data.checkout?.lines || [];
    const productCurrency: string = data.checkout?.totalPrice?.gross?.currency ?? "";

    const checkoutTotal = products.reduce((accumulator: number, product: CheckoutLine) => {
      const productPrice: number = product?.totalPrice?.gross?.amount ?? 0;
      return accumulator + productPrice;
    }, 0);

    return (
      <Layout>
        <CartList products={products} />
        {products.length ? (
          <div className={classes.checkout}>
            <p className={classes["checkout-total"]}>
              Total: {checkoutTotal} {productCurrency}
            </p>
            <Button onClick={() => console.log("Money money money")}>Payment</Button>
          </div>
        ) : (
          <p className={classes["checkout-empty"]}>Basket is empty</p>
        )}
      </Layout>
    );
  }
  return null;
}
