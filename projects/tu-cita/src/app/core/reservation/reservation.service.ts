import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationSubject = new BehaviorSubject(null);
  public reservation$ = this.reservationSubject.asObservable();

  public setReservation(reservationData): void {
    this.reservationSubject.next(reservationData);
  }
}
