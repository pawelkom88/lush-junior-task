import Image from "next/image";
import Link from "next/link";
import SubscriptionForm from "@components/subscription-form/SubscriptionForm";
import SocialMedia from "@components/social-media/SocialMedia";
import Copyright from "@components/copyright/Copyright";
import footerAd from "@root/public/images/footer-ad.webp";
import { leftFooterSectionLinks, rightFooterSectionLinks } from "constants/constants";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer-main"]}>
          <div className={classes["footer-main__col"]}>
            {leftFooterSectionLinks?.map(({ id, href, name }) => {
              return (
                <Link key={id} href={href}>
                  {name}
                </Link>
              );
            })}
          </div>
          <div className={classes["footer-main__col"]}>
            {rightFooterSectionLinks?.map(({ id, href, name }) => {
              return (
                <Link key={id} href={href}>
                  {name}
                </Link>
              );
            })}
          </div>
          <div className={classes["col-xl"]}>
            <Image src={footerAd} width={400} height={160} alt="asd" />
          </div>
        </div>
        <div className={classes["footer-bottom"]}>
          <SocialMedia />
          <SubscriptionForm />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
