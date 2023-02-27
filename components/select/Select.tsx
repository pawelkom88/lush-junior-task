import React from "react";
import classes from "./Select.module.scss";
import { Props } from "types/types";

export default function Select({children}:Props) {
  return <div className={classes["select-wrapper"]}>{children}</div>;
}
