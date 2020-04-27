import { ActivityData } from './activity-data';
import { RoleType } from './role-type';

export interface Role {
  id: string;
  roleType: RoleType;
  activityData: ActivityData;
}
