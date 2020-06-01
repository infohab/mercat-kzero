import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Reservation } from './reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {
  public constructor(private httpClient: HttpClient) {}

  public bookReservation(reservation: Reservation): Observable<Reservation> {
    console.log(reservation);
    return of(null);
    // return this.httpClient.post<Reservation>(`${environment.apiUrl}/reservation`, null);
  }

  public fetchReservations(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/reservations`);
  }
}
