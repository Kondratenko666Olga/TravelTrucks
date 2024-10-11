export interface Camper {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    author: string;
    comment: string;
    rating: number;
  }
  