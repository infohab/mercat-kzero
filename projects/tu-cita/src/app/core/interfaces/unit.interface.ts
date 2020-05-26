import { ServiciosOfUnit } from './servicios-of-unit.interface';
import { Enterprise } from './enterprise.interface';
import { ContactData } from './contact-data.interface';
import { WorkingDay } from './working-day.interface';
import { Resource } from './resource.interface';
import { GeoCoordinate } from './geo-coordinate.interface';

export interface Unit {
  id: string;
  name: string;
  displayName: string;
  unitCategoryId: string;
  enterprise: Enterprise;
  contactData: ContactData;
  workingDays: WorkingDay[];
  serviciosOfUnit: ServiciosOfUnit[];
  resources: Resource[];
  geoCoordinate: GeoCoordinate;
}
