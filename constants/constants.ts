import fbIcon from "../public/icons/facebook.svg";
import whatsappIcon from "../public/icons/whatsapp.svg";
import instagramIcon from "../public/icons/instagram.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import fallbackImage from "../public/images/PRODUCT-UNAVAILABLE.png";
import { StaticImageData } from "next/image";
import { ProductOrderField } from "@generated/api";

export const initialNumberOfProducts: number = 20;
export const currentYear: number = new Date().getFullYear();
export const productUnavailable: StaticImageData = fallbackImage;
export const notAvailable: string = "Not available";
export const productsPerPageOptions: number[] = [20, 50, 100];
export const sortByOptions: ProductOrderField[] = [
  ProductOrderField.Name,
  ProductOrderField.Price,
  ProductOrderField.Rating,
];

interface Link {
  id: number;
  name: string;
  href: string;
}

interface SocialMediaConfig {
  id: number;
  src: any;
  alt: string;
}

export const navLinks: Link[] = [
  { id: 1, name: "Hot list", href: "hot-list" },
  { id: 2, name: "New", href: "new-products" },
  { id: 3, name: "Sale", href: "sale" },
  { id: 4, name: "Best sellers", href: "best-sellers" },
];

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

export const leftFooterSectionLinks: Link[] = [
  "Size Guide",
  "Payment Options",
  "Shipping & Delivery",
  "Track Your Order",
].map(buildSectionLinks);

export const rightFooterSectionLinks: Link[] = [
  "About Us",
  "Careers",
  "Contact us",
  "Investors",
].map(buildSectionLinks);

function buildSectionLinks(name: string, index: number): Link {
  return { id: index + 1, href: "/", name };
}
