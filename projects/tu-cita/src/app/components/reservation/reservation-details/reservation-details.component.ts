import { Component, Input } from '@angular/core';
import { Reservation } from '../../../core/reservation/reservation.interface';
import { getReadableDate, getReadableTime } from '../../../shared/utils';

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
