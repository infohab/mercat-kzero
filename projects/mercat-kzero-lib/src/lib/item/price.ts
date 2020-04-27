import { UnitType } from './unit-type';

export interface Price {
  unitQuantity: number;
  unitType: UnitType;
  value: number;
}
