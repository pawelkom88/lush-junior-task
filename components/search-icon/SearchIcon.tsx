import classes from "./SearchIcon.module.scss";

type SearchIconProps = {
  onClick?: () => void;
};

export default function SearchIcon({ onClick }: SearchIconProps) {
  return (
    <svg
      onClick={onClick}
      className={classes.icon}
      width={20}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      role="presentation">
      <path d="M15.78 14.72l-4.45-4.46a6.346 6.346 0 1 0-1.055 1.066l4.444 4.454a.75.75 0 0 0 1.062-1.06zM1.5 6.353a4.84 4.84 0 1 1 4.84 4.853A4.852 4.852 0 0 1 1.5 6.353z"></path>
    </svg>
  );
}
