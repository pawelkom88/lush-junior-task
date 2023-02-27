import Image from "next/image";
import classes from "./Thumbnail.module.scss";
import { playButton } from "constants/constants";
import { ThumbnailProps } from "types/types";

export default function Thumbnail({ media, alt, onSelectedImage }: ThumbnailProps) {
  let youtubeUrl;

  return (
    <>
      <div className={classes["product-image__mini"]}>
        {media?.map(({ url }) => {
          if (url.includes("youtube")) {
            youtubeUrl = url as string;
            return (
              <a key={url} href={youtubeUrl} target="_blank" rel="noreferrer">
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
