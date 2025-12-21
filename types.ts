import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
  colSpan: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  img: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
