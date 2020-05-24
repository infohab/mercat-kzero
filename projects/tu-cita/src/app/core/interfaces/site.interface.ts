import { Utility } from './utility.interface';
import { Enterprise } from './enterprise.interface';
import { ContactData } from './contact-data.interface';
import { WorkingDay } from './working-day.interface';
import { Employee } from './employee.interface';

export interface Site {
  id: string;
  name: string;
  displayName: string;
  unitCategoryId: string;
  enterprise: Enterprise;
  contactData: ContactData;
  workingDays: WorkingDay[];
  serviciosUnit: Utility[];
  employees: Employee[];
}
