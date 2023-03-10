export interface Pizza {
  id: string;
  imageUrl: string[];
  title: string;
  description: string;
  isNew: boolean;
  types: string[];
  sizes: number[];
  prices: number[];
  sortingPrice: number;
  category: string;
  rating: number;
}

export interface CartPizza extends Pick<Pizza, 'id' | 'title'> {
  imageUrl: string;
  type: string;
  size: number;
  price: number;
  count: number;
}
