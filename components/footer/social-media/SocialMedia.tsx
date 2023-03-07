import Image from "next/image";
import { socialMediaConfig } from "constants/constants";
import classes from "./SocialMedia.module.scss";

export default function SocialMedia() {
  return (
    <div className={classes["footer-media"]}>
      {socialMediaConfig.map(({ id, src, alt }) => {
        return <Image key={id} width={25} height={25} src={src} alt={alt} />;
      })}
    </div>
  );
}
