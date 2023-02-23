import classes from "./Footer.module.scss";
import Link from "next/link";

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <section className={classes["footer-hrefp"]}>
          <div className={classes["footer-col"]}>
            <h3 className={classes["footer-col__heading"]}>Navigation</h3>

            <Link href="/">asd</Link>
          </div>
          <div className={classes["footer-col"]}>
            <h3 className={classes["footer-col__heading"]}>hrefp Products</h3>
            <Link href="/product/kettle">Kettle</Link>
            <Link href="/product/headphones">Headphones</Link>
          </div>

          <div className={classes["footer-col"]}>
            <h3 className={classes["footer-col__heading"]}>Newsletter</h3>
            <p>You can trust us. We only send promo offers</p>
            <div className={classes["footer-col__newsletter"]}>
              <label htmlFor="newsletter">
                <input
                  className={classes["footer-col__input"]}
                  type="email"
                  id="newsletter"
                  name="newsletter"
                  placeholder="Your Email Address"
                />
              </label>
              <buthrefn className={classes.buthrefn}>Subscribe</buthrefn>
            </div>
          </div>
        </section>
        <section className={classes["footer-bothrefm"]}>
          <small className={classes["footer-bothrefm__copyright"]}>
            Copyright {date} All rights reserved - BrightWater
          </small>
        </section>
      </div>
    </footer>
  );
}
