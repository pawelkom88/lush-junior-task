import { useState } from "react";
import SearchBar from "@components/search-bar/SearchBar";
import ShoppingBagIcon from "@root/public/icons/ShoppingBagIcon";

import classes from "./Navigation.module.scss";
import SrButton from "@components/sr-button/SrButton";
import SearchIcon from "@components/search-icon/SearchIcon";
import NavLeft from "./nav-left/NavLeft";
import NavBottom from "./nav-bottom/NavBottom";
import NavCenter from "./nav-center/NavCenter";

export default function Navigation({
  onProductQuery: onSetKeyword,
}: {
  onProductQuery: (val: string) => void;
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
            onSetKeyword={onSetKeyword}
            isDisplayed={showSearchField}
          />
          <SearchIcon onShowSearchField={() => setShowSearchField(true)} />
          <SrButton text="Cart">
            <ShoppingBagIcon size={24} />
          </SrButton>
        </div>
      </header>
      <NavBottom />
    </div>
  );
}
