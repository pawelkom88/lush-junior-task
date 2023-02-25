import { useState } from "react";
// import { useState, Dispatch, SetStateAction } from "react";
import classes from "./SearchBar.module.scss";
import ClearInputFieldIcon from "@root/public/icons/ClearInputFieldIcon";

type SearchBarProps = {
  //   setKeyword: Dispatch<SetStateAction<string>>;
  onSetKeyword: (val: string) => void;
  onClick: () => void;
  isDisplayed: boolean;
};

export default function SearchBar({ isDisplayed, onSetKeyword, onClick }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  function onSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    onSetKeyword(value);
  }

  return (
    <form
      role="search"
      className={`${classes.form} ${isDisplayed ? classes.mobile : classes.desktop}`}
      onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="search">
        Search <input type="text" />
      </label>
      <input
        id="search"
        name="search"
        type="search"
        value={value}
        placeholder="Search product"
        className={`${isDisplayed ? classes.fullwidth : ""}`}
        onChange={e => setValue(e.target.value)}
      />
      <input type="submit" style={{ display: "none" }} />
      <button type="button" title="close" className={classes["clear-input"]} onClick={onClick}>
        <ClearInputFieldIcon />
      </button>
    </form>
  );
}
