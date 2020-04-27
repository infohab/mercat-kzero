import { ItemCategory } from './item-category';
import { Price } from './price';

export interface Item {
  id: string;
  name: string;
  itemCategory: ItemCategory;
  displayName: string;
  price: Price;
  imageId: string;
}
