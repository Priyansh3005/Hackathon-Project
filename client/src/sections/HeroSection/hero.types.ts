export interface HeroCTA {
  label: string;
  route: string;
  variant: "primary" | "secondary";
}

export interface HeroSectionProps {
  headline: string;
  subheading: string;
  ctas: HeroCTA[];
}
