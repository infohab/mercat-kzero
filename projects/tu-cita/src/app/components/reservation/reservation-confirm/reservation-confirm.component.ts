import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reservation } from '../../../core/reservation/reservation.interface';

@Component({
  selector: 'app-reservation-confirm',
  templateUrl: './reservation-confirm.component.html',
  styleUrls: ['./reservation-confirm.component.scss']
})
export class ReservationConfirmComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) public data: Reservation) {}
}
