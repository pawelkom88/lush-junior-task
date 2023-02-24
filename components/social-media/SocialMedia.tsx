import Image from "next/image";
import { socialMedia } from "@utils/utils";
import classes from "./SocialMedia.module.scss";

export default function SocialMedia() {
  return (
    <div className={classes["footer-media"]}>
      {socialMedia?.map(({ id, src, alt }) => {
        return <Image key={id} width={25} height={25} src={src} alt={alt} />;
      })}
    </div>
  );
}
