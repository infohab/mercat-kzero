import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Reservation } from './reservation.interface';
import { ReservationApiService } from './reservation-api.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationStoreService {
  private reservationSubject = new BehaviorSubject(null);
  public reservation$ = this.reservationSubject.asObservable();

  public reservationsSubject = new BehaviorSubject<Reservation[]>([]);
  public reservations$ = this.reservationsSubject.asObservable();

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

  public get reservations(): Reservation[] {
    return this.reservationsSubject.getValue();
  }

  public loadReservations() {
    return this.reservationApiService.fetchReservations();
  }
}
