import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessEmployeesComponent } from './business-employees/business-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimeAvailabilityComponent } from './time-availability/time-availability.component';

@NgModule({
  declarations: [
    BusinessDetailsComponent,
    BusinessEmployeesComponent,
    EmployeeDetailsComponent,
    TimeAvailabilityComponent
  ],
  imports: [CommonModule]
})
export class BackOfficeModule {}
