import { OrderStatus } from './order-status';
import { ItemCollection } from './item-collection';
import { OrderItem } from './order-item';
import { Customer } from '../roles/customer';

export class Order extends ItemCollection {
  id: string;
  customer: Customer;
  createData: Date;
  updateData: Date;
  orderItems: OrderItem[];
  orderStatus: OrderStatus;

  public getSubTotal(): number {
    return 0;
  }
}
