import { useState } from "react";
import classes from "./Hamburger.module.scss";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <button
      type="button"
      className={`${isOpen ? classes.active : ""} ${classes.hamburger} `}
      onClick={() => setIsOpen(!isOpen)}>
      <span className="sr-only">Hamburger menu</span>
    </button>
  );
}
