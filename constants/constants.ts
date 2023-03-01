import fbIcon from "../public/icons/facebook.svg";
import whatsappIcon from "../public/icons/whatsapp.svg";
import instagramIcon from "../public/icons/instagram.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import fallback from "../public/images/PRODUCT-UNAVAILABLE.png";
import playBtn from "../public/icons/play-button.png";
import { StaticImageData } from "next/image";

export const numberOfProductsToFetch: number = 20;

export const currentYear: number = new Date().getFullYear();

export const productUnavailable: StaticImageData = fallback;

export const NumberOfProductsToDisplayArray: number[] = [20, 30, 40, 50];

export const NameOfSortingCriteriasArray: string[] = ["NAME", "PRICE", "RATING"];

interface navLinks {
  id: number;
  name: string;
  href: string;
}

export const navLinks: navLinks[] = [
  { id: 1, name: "Hot list", href: "hot-list" },
  { id: 2, name: "New", href: "new-products" },
  { id: 3, name: "Sale", href: "sale" },
  { id: 4, name: "Best sellers", href: "best-sellers" },
];

interface SocialMediaConfig {
  id: number;
  src: any;
  alt: string;
}

export const socialMediaConfig: SocialMediaConfig[] = [
  {
    id: 1,
    src: fbIcon,
    alt: "facebook icon",
  },
  {
    id: 2,
    src: instagramIcon,
    alt: "instagram icon",
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

interface FooterSectionLinks {
  id: number;
  name: string;
  href: string;
}

export const leftFooterSectionLinks: FooterSectionLinks[] = [
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

export const rightFooterSectionLinks: FooterSectionLinks[] = [
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

export const notAvailable: string = "Not available";
