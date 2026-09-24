export type Flavor = 'classic' | 'blue';

export interface FlavorConfig {
  id: Flavor;
  name: string;
  price: string;
  description: string;
  tagline: string;
  imageSrc: string;
  bgInner: string;
  bgMid: string;
  bgOuter: string;
  themeClass: string;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefit: string;
  color: string;
}

export interface Review {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  rating: number;
  text: string;
  flavor: Flavor;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
