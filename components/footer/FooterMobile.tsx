import Copyright from "@components/copyright/Copyright";
import Arrow from "@root/public/icons/Arrow";
import classes from "./FooterMobile.module.scss";

export default function FooterMobile() {
  return (
    <footer className={classes.footer}>
      <h3 className={classes["footer-heading"]}>Get 10% off</h3>
      <p className={classes["footer-subheading"]}>
        Get 10% OFF when you sign up for our newsletter by submitting your email! Opt out at any
        time
      </p>
      <form className={classes["footer-form"]}>
        <label htmlFor="signup"></label>
        <input id="signup" name="signup" type="email" placeholder="Enter e-mail" />
        <button title="submit">
          <Arrow />
        </button>
      </form>
      <h4 className={classes["footer-text"]}>Customer Care: +44-(0)00-0000-0000</h4>
      <p className={classes["footer-text"]}>connect</p>
      <Copyright />
    </footer>
  );
}
