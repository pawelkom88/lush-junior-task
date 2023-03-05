import { Props } from "types/types";
import classes from "./Button.module.scss";

interface ButtonProps extends Props {
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button type="submit" onClick={onClick} className={classes["cart-button"]}>
      {children}
    </button>
  );
}
