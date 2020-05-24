import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reservation } from './reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationSubject = new BehaviorSubject(null);
  public reservation$ = this.reservationSubject.asObservable();

  public set reservation(reservationData) {
    this.reservationSubject.next(reservationData);
  }

  public get reservation(): Reservation {
    return this.reservationSubject.getValue();
  }
}
