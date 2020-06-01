import { Slot } from './slot.class';
import { ServiciosOfUnit } from './servicios-of-unit.class';

export class Reservation {
  id: string;
  unitId: string;
  serviceType: ServiciosOfUnit;
  resourceName: string;
  slot: Slot;
  quantity: number;
  clientName?: string;
  status: number;
  place: string;
  name: string;
  employee: any;
  date: Date;
  time: number;

  public constructor(partial) {
    this.id = partial.id ? partial.id : null;
    this.unitId = partial.unitId ? partial.unitId : null;
    this.serviceType = partial.servicioId ? ServiciosOfUnit.parseFromApi(partial) : null;
    this.resourceName = partial.resourceName ? partial.resourceName : null;
    this.slot = partial.slot ? partial.slot : null;
    this.quantity = partial.quantity ? partial.quantity : null;
    this.clientName = partial.clientName ? partial.clientName : null;
    this.status = partial.status ? partial.status : null;
  }

  public static parseFromApi(partial): Reservation {
    return new Reservation(partial);
  }
}
