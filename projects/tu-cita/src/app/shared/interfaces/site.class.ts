import { MapPosition } from './map-position.class';
import { Enterprise } from './enterprise.class';
import { ContactData } from './contact-data.class';
import { WorkingDay } from './working-day.class';
import { ServiciosOfUnit } from './servicios-of-unit.class';
import { Resource } from './resource.class';

export class Site {
  id: string;
  name: string;
  displayName: string;
  unitCategoryId: string;
  enterprise: Enterprise;
  contactData: ContactData;
  position: MapPosition;
  workingDays: WorkingDay[];
  serviciosOfUnit: ServiciosOfUnit[];
  resources: Resource[];

  public constructor(partial) {
    this.id = partial.id ? partial.id : null;
    this.name = partial.name ? partial.name : null;
    this.displayName = partial.displayName ? partial.displayName : null;
    this.unitCategoryId = partial.unitCategoryId ? partial.unitCategoryId : null;
    this.enterprise = partial.enterprise ? partial.enterprise : null;
    this.contactData = partial.contactData ? partial.contactData : null;
    this.position = partial.geoCoordinate ? MapPosition.parseFromGeoCoordinate(partial.geoCoordinate) : null;
    this.workingDays = partial.workingDays ? partial.workingDays : null;
    this.serviciosOfUnit = partial.serviciosOfUnit ? partial.serviciosOfUnit : null;
    this.resources = partial.resources ? partial.resources : null;
  }

  public static parseFromUnit(unit): Site {
    return new Site(unit);
  }
}
