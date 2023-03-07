import classes from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div data-testid="spinner" className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
}
