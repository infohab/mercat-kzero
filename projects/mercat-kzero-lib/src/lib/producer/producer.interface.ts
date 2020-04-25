import { Product } from '../product/product.interface';

export interface Producer {
  id: string;
  displayName: string;
  position: number[];
  location: string;
  rating: number;
  products: Product[];
}
