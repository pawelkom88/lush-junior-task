import Arrow from "@root/public/icons/Arrow";
import classes from "./SubscriptionForm.module.scss";

export default function SubscriptionForm({}) {
  return (
    <form className={classes["footer-form"]}>
      <label htmlFor="signup form"></label>
      <input
        id="newsletter signup form"
        name="signup form"
        type="email"
        placeholder="Enter e-mail"
      />
      <button title="submit">
        <Arrow />
      </button>
    </form>
  );
}
