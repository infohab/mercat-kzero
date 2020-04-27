import { Item } from '../item/item';
import { ItemCollection } from './item-collection';
import { Customer } from '../roles/customer';

export class WhishList extends ItemCollection {
  id: string;
  customer: Customer;
  updatedData: Date;
  items: Item[];
}
