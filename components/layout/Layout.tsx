import classes from "./Layout.module.scss";
import { ChildrenType } from "types/types";

export default function Layout({ children }: ChildrenType) {
  return <main className={classes.main}>{children}</main>;
}
