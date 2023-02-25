import Arrow from "@root/public/icons/Arrow";
import classes from "./SubscriptionForm.module.scss";

export default function SubscriptionForm({}) {
  return (
    <form className={classes["footer-form"]}>
      <label htmlFor="signup"></label>
      <input id="signup" name="signup" type="email" placeholder="Enter e-mail" />
      <button title="submit">
        <Arrow />
      </button>
    </form>
  );
}
