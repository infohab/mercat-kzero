import { Product } from '../product/product.interface';

export interface CartItem {
  amount: number;
  product: Product;
}
