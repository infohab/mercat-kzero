import { Item } from '../item/item';

export class ItemCollection {
  public add(item: Item): void {
    console.log('add', item);
  }

  public remove(item: Item): void {
    console.log('remove', item);
  }

  public clean(): void {
    console.log('clean');
  }
}
