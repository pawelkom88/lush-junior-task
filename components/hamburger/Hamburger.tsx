import { useState } from "react";
import classes from "./Hamburger.module.scss";

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <button
      type="button"
      className={`${isMenuOpen ? classes.active : ""} ${classes.hamburger} `}
      onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span className="sr-only">Hamburger menu</span>
    </button>
  );
}
