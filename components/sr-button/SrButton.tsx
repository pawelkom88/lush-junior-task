import React from "react";
import { ChildrenType } from "types/types";
import classes from "./SrButton.module.scss";

interface SrButtonProps extends ChildrenType {
  text: string;
  onClick?: () => void;
}

export default function SrButton({ children, text, onClick }: SrButtonProps) {
  return (
    <button type="button" onClick={onClick} className={classes.button}>
      {children}
      <span className="sr-only">{text}</span>
    </button>
  );
}
