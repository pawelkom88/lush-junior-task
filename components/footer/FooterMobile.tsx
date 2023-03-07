import SocialMedia from "@components/footer/social-media/SocialMedia";
import SubscriptionForm from "@components/footer/subscription-form/SubscriptionForm";
import Copyright from "@components/footer/copyright/Copyright";
import classes from "./FooterMobile.module.scss";

export default function FooterMobile() {
  return (
    <footer className={classes.footer}>
      <h3 className={classes["footer-heading"]}>Get 10% off</h3>
      <p className={classes["footer-subheading"]}>
        Get 10% OFF when you sign up for our newsletter by submitting your email! Opt out at any
        time
      </p>
      <SubscriptionForm />
      <h4 className={classes["footer-text"]}>Customer Care: +44-(0)00-0000-0000</h4>
      <p className={classes["footer-text"]}>connect</p>
      <SocialMedia />
      <Copyright />
    </footer>
  );
}
