import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReservationApiService } from './reservation-api.service';
import { tap } from 'rxjs/operators';
import { Reservation } from '../../shared/interfaces/reservation.class';

@Injectable({
  providedIn: 'root'
})
export class ReservationStoreService {
  private reservationSubject = new BehaviorSubject(null);
  public reservation$ = this.reservationSubject.asObservable();

  private reservationListSubject = new BehaviorSubject([]);
  public reservationList$ = this.reservationListSubject.asObservable();

  public constructor(private reservationApiService: ReservationApiService) {}

  public set reservation(reservationData) {
    this.reservationSubject.next(reservationData);
  }

  public get reservation(): Reservation {
    return this.reservationSubject.getValue();
  }

  public bookReservation(reservation): Observable<Reservation> {
    return this.reservationApiService.bookReservation(reservation);
  }

  public loadReservationList(): void {
    this.reservationApiService
      .getReservationList()
      .pipe(tap((reservationList) => this.reservationListSubject.next(reservationList)))
      .subscribe();
  }
}
