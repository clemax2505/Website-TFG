export interface Review {
  author: string;
  rating: number;
  comment: string;
}

export interface Project {
  title: string;
  specs: string;
  images: string[];
  review: Review;
}