import Link from "next/link";
import Image from "next/image";
import Hamburger from "@components/navigation/hamburger/Hamburger";
import classes from "./NavCenter.module.scss";

export default function NavCenter({ showSearchField }: { showSearchField: boolean }) {
  return (
    <>
      {" "}
      {!showSearchField && (
        <>
          <Hamburger />
          <Link href="/">
            <Image
              className={classes.logo}
              width={110}
              height={60}
              src="/images/Brand_Logo.png"
              alt="brand logo"
            />
          </Link>
        </>
      )}
    </>
  );
}
