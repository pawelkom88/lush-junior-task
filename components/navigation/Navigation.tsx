import ShoppingBag from "@root/public/icons/ShoppingBag";
import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={classes.wrapper}>
      <header className={`${classes.header}`}>
        <nav className={classes.navigation}>
          <ul className={classes["navigation-items"]}>
            <li className={classes["navigation-item"]}>
              <Link href="">asd</Link>
            </li>
            <li className={classes["navigation-item"]}>
              <Link href="">asd</Link>
            </li>
          </ul>
        </nav>
        <Image
          className={classes.logo}
          width={110}
          height={60}
          src="/images/Brand_Logo.png"
          alt="brand logo"
        />
        <div>
          <input type="search" placeholder="Search" />
          <ShoppingBag size={20} />
        </div>
      </header>
      <nav className={classes["navigation-bottom"]}>
        <ul className={classes["navigation-bottom__items"]}>
          <li>
            <Link href="/">Hot list</Link>
          </li>
          <li>
            <Link href="/">New</Link>
          </li>
          <li>
            <Link href="/">Sale</Link>
          </li>
          <li>
            <Link href="/">Best sellers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
