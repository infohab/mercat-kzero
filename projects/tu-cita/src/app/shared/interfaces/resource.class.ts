import { WorkingDay } from './working-day.class';
import { ServiciosOfUnit } from './servicios-of-unit.class';

export class Resource {
  name: string;
  servicios: ServiciosOfUnit[];
  workingDays: WorkingDay[];
  available: boolean;
}
