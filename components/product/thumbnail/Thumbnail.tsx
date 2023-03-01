import Image from "next/image";
import classes from "./Thumbnail.module.scss";
import  playButton  from "@root/public/icons/play-button.png";
import { ThumbnailProps } from "types/types";

export default function Thumbnail({ media = [], alt, onSelectedImage }: ThumbnailProps) {

  return (
    <>
      <div className={classes["product-image__mini"]}>
        {media?.map(({ url }) => {
          if (url.includes("youtube")) {
            return (
              <a key={url} href={url} target="_blank" rel="noreferrer">
                <Image width={50} height={50} src={playButton} alt={alt} />
                <span className="sr-only">Link to youtube video</span>
              </a>
            );
          }

          return (
            <button
              type="button"
              className={classes.thumbnail}
              key={url}
              onClick={() => onSelectedImage(url)}>
              <Image width={50} height={50} src={url} alt={alt} />
              <span className="sr-only">Product image</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
