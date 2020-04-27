import { Item } from '../item/item';

export class OrderItem {
  id: string;
  item: Item;
  quantity: number;

  public getPriceForQuantity(): number {
    return 0;
  }
}
