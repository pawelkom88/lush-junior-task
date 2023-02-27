import classes from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <h1 className={classes["hero-heading"]}>Beauty is an attitude</h1>
      <p className={classes["hero-subheading"]}>Discover the secret of 100% natural products</p>
      <a className={`${classes["hero-cta"]} button`} href="#products">
        Shop now
      </a>
    </section>
  );
}
