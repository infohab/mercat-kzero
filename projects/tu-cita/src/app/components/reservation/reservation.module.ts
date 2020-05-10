import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReservationComponent } from './reservation/reservation.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationComponent } from '../reservation/confirmation/confirmation.component';

@NgModule({
  declarations: [ReservationComponent, ReservationDetailsComponent, ConfirmationComponent],
  exports: [ReservationComponent, ReservationDetailsComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class ReservationModule {}
