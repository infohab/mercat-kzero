import { WorkingDay } from './working-day.interface';
import { ServiciosOfUnit } from './servicios-of-unit.interface';

export interface Resource {
  name: string;
  servicios: ServiciosOfUnit[];
  workingDays: WorkingDay[];
  available: boolean;
}
