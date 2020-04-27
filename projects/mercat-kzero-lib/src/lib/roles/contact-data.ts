import { Address } from './address';

export interface ContactData {
  id: string;
  email: string;
  phone: string[];
  address: Address;
}
