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

export enum ItemCategory {
  a,
  b,
  c,
  d
}
