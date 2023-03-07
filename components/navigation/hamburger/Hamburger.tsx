import { useState } from "react";
import classes from "./Hamburger.module.scss";

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <button
      type="button"
      className={`${classes.hamburger} ${isMenuOpen ? classes.active : ""}`.trim()}
      onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span className="sr-only">Hamburger menu</span>
    </button>
  );
}
