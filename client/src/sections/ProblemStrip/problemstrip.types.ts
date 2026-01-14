export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

export interface ProblemStripProps {
  items: ProblemItem[];
}
