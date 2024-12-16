export interface PCConfig {
  id: string;
  name: string;
  price: number;
  description: string;
  link?: string; // Made optional with '?'
}