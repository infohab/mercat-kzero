import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessEmployeesComponent } from './business-employees/business-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimeAvailabilityComponent } from './time-availability/time-availability.component';
import { BackOfficeRoutingModule } from './back-office.routing.module';

@NgModule({
  declarations: [
    BusinessDetailsComponent,
    BusinessEmployeesComponent,
    EmployeeDetailsComponent,
    TimeAvailabilityComponent
  ],
  imports: [CommonModule, BackOfficeRoutingModule]
})
export class BackOfficeModule {}
