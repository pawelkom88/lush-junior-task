import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./SearchBar.module.scss";
import ClearInputFieldIcon from "@root/public/icons/ClearInputFieldIcon";
import { SearchBarProps } from "types/types";

export default function SearchBar({
  isDisplayed,
  onSetKeyword,
  onShowSearchField,
}: SearchBarProps) {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  function onSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    router.push("/#products");
    onSetKeyword(value);
  }

  function resetQuery(): void {
    onShowSearchField();
    onSetKeyword("");
    setValue("");
  }

  return (
    <form
      role="search"
      className={`${classes.form} ${isDisplayed ? classes.onMobile : classes.onDesktop}`}
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
      <input className={classes["hidden-input"]} type="submit" />
      {value && (
        <button type="button" title="close" className={classes["clear-input"]} onClick={resetQuery}>
          <ClearInputFieldIcon />
        </button>
      )}
    </form>
  );
}
