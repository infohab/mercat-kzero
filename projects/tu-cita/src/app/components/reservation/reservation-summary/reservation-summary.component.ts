import { Component } from '@angular/core';
import { ReservationService } from '../../../core/reservation/reservation.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent {
  constructor(public reservationService: ReservationService) {}
}
