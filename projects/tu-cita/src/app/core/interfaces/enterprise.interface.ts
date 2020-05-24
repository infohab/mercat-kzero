import { ContactData } from './contact-data.interface';

export interface Enterprise {
  id: string;
  name: string;
  displayName: string;
  nif: string;
  contactData: ContactData;
}
