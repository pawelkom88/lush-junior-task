import Link from "next/link";
import classes from "./NavLeft.module.scss";

export default function NavLeft() {
  return (
    <nav className={classes.navigation}>
      <ul className={classes["navigation-items"]}>
        <li className={classes["navigation-item"]}>
          <Link href="about-us">About us</Link>
        </li>
        <li className={classes["navigation-item"]}>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
