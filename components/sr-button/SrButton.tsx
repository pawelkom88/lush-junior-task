import React from "react";
import classes from "./SrButton.module.scss";
import { SrButtonProps } from "types/types";

export default function SrButton({ children, text }: SrButtonProps) {
  return (
    <button type="button" className={classes.button}>
      {children}
      <span className="sr-only">{text}</span>
    </button>
  );
}
