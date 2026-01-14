export interface TrustItem {
  id: string;
  text: string;
  linkLabel?: string;
  linkRoute?: string;
}

export interface TrustStripProps {
  items: TrustItem[];
}
