import { Slot } from './slot.interface';

export interface Reservation {
  id: string;
  unitId: string;
  servicioId: string;
  resourceName: string;
  slot: Slot;
  quantity: number;
  clientName?: string;
  status: number;
}
