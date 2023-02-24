import fbIcon from "../public/icons/facebook.svg";
import whatsappIcon from "../public/icons/whatsapp.svg";
import instagramIcon from "../public/icons/instagram.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import footerAd from "../public/images/PRODUCT-UNAVAILABLE.png";

export const numberOfProducts = 20;
export const date = new Date().getFullYear();

export const socialMedia = [
  {
    id: 1,
    src: fbIcon,
    alt: "facebook icon",
  },
  {
    id: 2,
    src: instagramIcon,
    alt: "instagram",
  },
  {
    id: 3,
    src: whatsappIcon,
    alt: "whatsapp icon",
  },
  {
    id: 4,
    src: linkedinIcon,
    alt: "linkedin icon",
  },
];

export const footerImg = footerAd;

export const footerLinksCol1 = [
  {
    id: 1,
    name: "Size Guide",
    href: "/",
  },
  {
    id: 2,
    name: "Payment Options",
    href: "/",
  },
  {
    id: 3,
    name: "Shipping & Delivery",
    href: "/",
  },
  {
    id: 4,
    name: "Track Your Order",
    href: "/",
  },
];

export const footerLinksCol2 = [
  {
    id: 1,
    name: "About Us",
    href: "/",
  },
  {
    id: 2,
    name: "Careers",
    href: "/",
  },
  {
    id: 3,
    name: "Contact us",
    href: "/",
  },
  {
    id: 4,
    name: "Investors",
    href: "/",
  },
];
