import { Component, Input } from '@angular/core';
import { getReadableDate, getReadableTime } from '../../../shared/utils';
import { Reservation } from '../../../shared/interfaces/reservation.class';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent {
  public getReadableTime = getReadableTime;
  public getReadableDate = getReadableDate;
  @Input() public reservation: Reservation;
}
