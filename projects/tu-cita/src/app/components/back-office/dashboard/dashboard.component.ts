import { Component, OnInit } from '@angular/core';
import { ReservationStoreService } from '../../../core/reservation/reservation-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public reservationList$ = this.reservationStoreService.reservationList$;

  public constructor(private reservationStoreService: ReservationStoreService) {}

  public ngOnInit(): void {
    this.reservationStoreService.loadReservationList();
  }
}
