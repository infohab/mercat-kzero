import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationConfirmComponent } from './reservation-confirm/reservation-confirm.component';
import { ReservationSumaryComponent } from './reservation-sumary/reservation-sumary.component';
import { ReservationService } from '../../core/reservation/reservation.service';

@NgModule({
  declarations: [
    ReservationComponent,
    ReservationDetailsComponent,
    ReservationConfirmComponent,
    ReservationSumaryComponent
  ],
  providers: [ReservationService],
  exports: [ReservationComponent, ReservationDetailsComponent, ReservationConfirmComponent, ReservationSumaryComponent],
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
    MatIconModule,
    MatDialogModule
  ]
})
export class ReservationModule {}
