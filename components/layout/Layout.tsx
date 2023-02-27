import React from "react";
import classes from "./Layout.module.scss";
import { Props } from "types/types";

export default function Layout({ children }: Props) {
  return <main className={classes.main}>{children}</main>;
}
