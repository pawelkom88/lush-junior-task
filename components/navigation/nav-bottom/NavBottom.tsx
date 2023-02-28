import Link from "next/link";
import { navLinks } from "constants/constants";
import classes from "./NavBottom.module.scss";

export default function NavBottom() {
  return (
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
  );
}
