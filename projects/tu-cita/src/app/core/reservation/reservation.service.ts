import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reservation } from './reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationSubject = new BehaviorSubject(null);

  public setReservation(reservationData): void {
    this.reservationSubject.next(reservationData);
  }

  public getReservation(): Observable<Reservation> {
    return this.reservationSubject.asObservable();
  }
}
