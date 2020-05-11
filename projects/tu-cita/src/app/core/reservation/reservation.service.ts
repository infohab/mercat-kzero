import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reservation } from './reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private subject = new BehaviorSubject(null);

  public setReservation(client): void {
    this.subject.next(client);
  }

  public getReservation(): Observable<Reservation> {
    return this.subject.asObservable();
  }
}
