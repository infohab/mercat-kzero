import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimeAvailabilityComponent } from './time-availability/time-availability.component';

const routes = [{ path: '', component: TimeAvailabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {}
