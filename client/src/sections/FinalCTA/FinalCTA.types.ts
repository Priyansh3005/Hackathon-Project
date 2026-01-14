export interface CTAItem {
  label: string;
  route: string;
  variant: "primary" | "secondary";
}

export interface FinalCTAProps {
  heading: string;
  ctas: CTAItem[];
}
