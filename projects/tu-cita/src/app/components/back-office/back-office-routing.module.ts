import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimeAvailabilityComponent } from './time-availability/time-availability.component';
import { ReservationComponent } from '../reservation/reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [{ path: '', component: TimeAvailabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {}
