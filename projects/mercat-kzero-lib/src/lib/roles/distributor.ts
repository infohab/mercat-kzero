import { DistributorProfile } from './distributor-profile';
import { Role } from './role';

export interface Distributor {
  role: Role;
  distributorProfile: DistributorProfile;
}
