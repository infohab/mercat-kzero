import { WorkingDay } from './working-day.interface';
import { Utility } from './utility.interface';

export interface Employee {
  name: string;
  servicios: Utility[];
  workingDays: WorkingDay[];
  available: boolean;
}
