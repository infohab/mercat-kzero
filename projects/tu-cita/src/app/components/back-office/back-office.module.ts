import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessEmployeesComponent } from './business-employees/business-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimeAvailabilityComponent } from './time-availability/time-availability.component';
import { BackOfficeRoutingModule } from './back-office.routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BusinessDetailsComponent,
    BusinessEmployeesComponent,
    EmployeeDetailsComponent,
    TimeAvailabilityComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class BackOfficeModule {}
