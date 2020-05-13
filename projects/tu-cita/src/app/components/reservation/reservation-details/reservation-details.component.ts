import { Component, Input } from '@angular/core';
import { Reservation } from '../../../core/reservation/reservation.interface';
import { getReadableTime } from '../../../shared/utils';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent {
  public getReadableTime = getReadableTime;
  @Input() public reservation: Reservation;
}
