export interface Camper {
    id: string;
    name: string;
    price: number;
    description: string;
    gallery: Gallery[];
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    author: string;
    comment: string;
    rating: number;
  }

  export interface Gallery {
    thumb: string;
    original: string;
  }
  