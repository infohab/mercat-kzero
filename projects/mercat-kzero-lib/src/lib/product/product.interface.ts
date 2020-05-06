import { ItemCategory } from '../item/item-category';

export interface Product {
  id: string;
  image: string;
  price: number;
  availableStock: number;
  name: string;
  measurementUnit: string;
  productType: ProductType;
  displayName: string;
  category: ItemCategory;
}

export enum ProductType {
  VEGETABLES = 'Vegetables',
  FRUITS = 'Fruits',
  TUBERCLES = 'Tubercles'
}
