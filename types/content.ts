export type NavItem = {
  label: string;
  section: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  client: string;
  goal: string;
  challenges: string[];
  solution: string;
  gallery: string[];
  result: string;
};

export type ReviewStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export type Review = {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  status: ReviewStatus;
  createdAt?: string | Date;
};