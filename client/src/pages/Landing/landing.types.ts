export interface HeroCTA {
  label: string;
  route: string;
  variant: "primary" | "secondary";
}

export interface HeroData {
  headline: string;
  subheading: string;
  ctas: HeroCTA[];
}

export interface ProblemStatement {
  id: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface TrustPoint {
  id: string;
  text: string;
  linkLabel?: string;
  linkRoute?: string;
}

export interface FooterContent {
  disclaimer: string;
  affiliationNote: string;
  credits: string;
  year: string;
}

export interface NavItem {
  label: string;
  route: string;
  isExternal?: boolean;
}

export interface LandingPageData {
  navItems: NavItem[];
  hero: HeroData;
  problems: ProblemStatement[];
  howItWorks: HowItWorksStep[];
  capabilities: Capability[];
  trustPoints: TrustPoint[];
  finalCTA: {
    heading: string;
    ctas: HeroCTA[];
  };
  footer: FooterContent;
}
