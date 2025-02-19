import type { IconType } from "react-icons";

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
	apple: string;
	google: string;
}

export interface SocialLink {
	url: string;
	icon: IconType;
	label: string;
}

export interface AppData {
	title: string;
	description: string;
	screenshots: string[];
	features: Feature[];
	faqs: FAQ[];
	storeLinks: StoreLinks;
	socialLinks: SocialLink[];
}
