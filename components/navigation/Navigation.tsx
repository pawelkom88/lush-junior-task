import { useState } from "react";
import SearchBar from "@components/search-bar/SearchBar";
import ShoppingBagIcon from "@root/public/icons/ShoppingBagIcon";
import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.scss";
import Hamburger from "@components/hamburger/Hamburger";
import SrButton from "@components/sr-button/SrButton";
import SearchIcon from "@components/search-icon/SearchIcon";
import { navLinks } from "constants/constants";

export default function Navigation({
  onProductQuery: onSetKeyword,
}: {
  onProductQuery: (val: string) => void;
}) {
  const [showSearchField, setShowSearchField] = useState<boolean>(false);

  return (
    <div className={classes.wrapper}>
      <header className={`${classes.header}`}>
        <nav className={classes.navigation}>
          <ul className={classes["navigation-items"]}>
            <li className={classes["navigation-item"]}>
              <Link href="">About us</Link>
            </li>
            <li className={classes["navigation-item"]}>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </nav>
        {!showSearchField && (
          <>
            <Hamburger />
            <Link href="/">
              <Image
                className={classes.logo}
                width={110}
                height={60}
                src="/images/Brand_Logo.png"
                alt="brand logo"
              />
            </Link>
          </>
        )}

        <div className={classes["navigation-right"]}>
          <SearchBar
            onShowSearchField={() => setShowSearchField(false)}
            onSetKeyword={onSetKeyword}
            isDisplayed={showSearchField}
          />
          <SearchIcon onShowSearchField={() => setShowSearchField(true)} />
          <SrButton text="Cart">
            <ShoppingBagIcon size={24} />
          </SrButton>
        </div>
      </header>
      <nav className={classes["navigation-bottom"]}>
        <ul className={classes["navigation-bottom__items"]}>
          {navLinks?.map(({ id, name, href }) => {
            return (
              <li className={classes["nav-item"]} key={id}>
                <Link href={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
