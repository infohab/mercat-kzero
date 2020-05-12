import { Component, Input } from '@angular/core';
import { Reservation } from '../../../core/reservation/reservation.interface';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent {
  @Input() public reservation: Reservation;
}
