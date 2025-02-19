import type { IconType } from "react-icons";

// Base types
export type DeviceType = "iphone" | "ipad";
export type LogoType = "iframe" | "image";
export type StoreType = "apple" | "google";

// Core interfaces
export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface StoreLinks {
  [key in StoreType]: string;
}

export interface SocialLink {
  url: string;
  icon: IconType;
  label: string;
}

export interface Logo {
  type: LogoType;
  src: string;
}

export interface Screenshots {
  [key in DeviceType]: string[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Main app data interface
export interface AppData {
  title: string;
  description: string;
  screenshots: Screenshots;
  features: Feature[];
  faqs: FAQ[];
  storeLinks: StoreLinks;
  socialLinks: SocialLink[];
  logo: Logo;
}

// Component props interfaces
export interface FeaturesProps {
  features: Feature[];
}

export interface FAQProps {
  items: FAQ[];
}

export interface SocialLinksProps {
  links: SocialLink[];
}

export interface ScreenshotsProps {
  images: Screenshots;
}

export interface LightboxProps extends ScreenshotsProps {}

export interface AppHeroProps {
  title: string;
  description: string;
  storeLinks: StoreLinks;
  logo: Logo;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export interface DeviceToggleProps {
  activeDevice: DeviceType;
  onToggle: (device: DeviceType) => void;
}

export interface GithubCornerProps {
  href: string;
}

export interface StoreButtonProps {
  store: StoreType;
  href: string;
  label: string;
  storeName: string;
}
