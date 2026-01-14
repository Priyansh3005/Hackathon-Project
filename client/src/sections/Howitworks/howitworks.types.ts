export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface HowItWorksProps {
  steps: HowItWorksStep[];
}
