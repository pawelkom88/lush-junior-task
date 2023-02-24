import Link from "next/link";
import SocialMedia from "@components/social-media/SocialMedia";
import Copyright from "@components/copyright/Copyright";
import { footerLinksCol1, footerLinksCol2, footerImg } from "@root/utils/utils";
import classes from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer-main"]}>
          <div className={classes['footer-main__col']}>
            {footerLinksCol1?.map(({ id, href, name }) => {
              return (
                <Link key={id} href={href}>
                  {name}
                </Link>
              );
            })}
          </div>
          <div className={classes['footer-main__col']}>
            {footerLinksCol2?.map(({ id, href, name }) => {
              return (
                <Link key={id} href={href}>
                  {name}
                </Link>
              );
            })}
          </div>
          <div className={classes["col-xl"]}>
            <Image src={footerImg} width={400} height={250} alt="asd" />
          </div>
        </div>
        <div className={classes["footer-bottom"]}>
          <SocialMedia />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
