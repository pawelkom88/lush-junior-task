import { useState } from "react";
import SearchBar from "@components/navigation/search-bar/SearchBar";
import ShoppingBagIcon from "@root/public/icons/ShoppingBagIcon";
import SearchIcon from "@components/navigation/search-bar/search-icon/SearchIcon";
import NavLeft from "./nav-left/NavLeft";
import NavBottom from "./nav-bottom/NavBottom";
import NavCenter from "./nav-center/NavCenter";
import classes from "./Navigation.module.scss";

export default function Navigation({
  onProductQuery,
  checkoutProductsTotal,
}: {
  onProductQuery: (val: string) => void;
  checkoutProductsTotal: number;
}) {
  const [showSearchField, setShowSearchField] = useState<boolean>(false);

  return (
    <div className={classes.wrapper}>
      <header className={`${classes.header} `}>
        <a className="skip-to-content-link" href="#main">
          Skip to content
        </a>
        <NavLeft />
        <NavCenter showSearchField={showSearchField} />
        <div className={classes["navigation-right"]}>
          <SearchBar
            onShowSearchField={() => setShowSearchField(false)}
            onSetKeyword={onProductQuery}
            isDisplayed={showSearchField}
          />
          <SearchIcon onShowSearchField={() => setShowSearchField(true)} />
          <ShoppingBagIcon size={24} />
          <span className={classes.bag} data-count={checkoutProductsTotal}></span>
        </div>
      </header>
      <NavBottom />
    </div>
  );
}
