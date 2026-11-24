import rawSite from './site.json';

export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: 'shield' | 'tools' | 'truck' | 'grid';
};

export type Equipment = {
  category: string;
  title: string;
  description: string;
};

export type PortfolioItem = {
  title: string;
  subtitle: string;
};

export type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
};

type SiteData = typeof rawSite;

export const site: SiteData['site'] = rawSite.site;
export const navItems: NavItem[] = rawSite.navItems;
export const services: Service[] = rawSite.services as Service[];
export const equipment: Equipment[] = rawSite.equipment;
export const portfolioItems: PortfolioItem[] = rawSite.portfolioItems;
export const blogPosts: BlogPost[] = rawSite.blogPosts;
export const companyHighlights: SiteData['companyHighlights'] = rawSite.companyHighlights;
export const telasFeatures: string[] = rawSite.telasFeatures;
export const telasBenefits: string[] = rawSite.telasBenefits;
export const diferenciais: SiteData['diferenciais'] = rawSite.diferenciais;

export default {
  site,
  navItems,
  services,
  equipment,
  portfolioItems,
  blogPosts,
  companyHighlights,
  telasFeatures,
  telasBenefits,
  diferenciais
};
