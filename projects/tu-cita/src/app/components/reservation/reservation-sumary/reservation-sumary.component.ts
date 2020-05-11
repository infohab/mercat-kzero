import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationService } from '../../../core/reservation/reservation.service';

@Component({
  selector: 'app-reservation-sumary',
  templateUrl: './reservation-sumary.component.html',
  styleUrls: ['./reservation-sumary.component.scss']
})
export class ReservationSumaryComponent implements OnInit {
  client$: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getClient().subscribe((data) => {
      this.client$.push(data);
      console.log(this.client$);
    });
  }
}
