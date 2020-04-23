import { Product } from '../product/product.interface';

export interface Producer {
  id: string;
  displayName: string;
  position: any;
  location: string;
  rating: number;
  products: Product[];
}
