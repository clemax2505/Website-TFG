export interface PCConfig {
  id: string;
  name: string;
  price: number;
  description: string;
  link?: string;
}

export interface PCConfigDetailed extends PCConfig {
  components: string[];
  images: {
    cpu: string;
    gpu: string;
    case: string;
  };
}
