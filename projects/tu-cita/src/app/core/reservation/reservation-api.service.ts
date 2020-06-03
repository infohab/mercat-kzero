import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Reservation as ReservationApi } from '../interfaces/reservation.interface';
import { Reservation } from '../../shared/interfaces/reservation.class';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {
  public constructor(private httpClient: HttpClient) {}

  public bookReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(`${environment.apiUrl}/reservations`, reservation);
  }

  public getReservationList(): Observable<Reservation[]> {
    return this.fetchReservationList().pipe(
      map((reservationList) => {
        return reservationList.map(Reservation.parseFromApi);
      })
    );
  }

  private fetchReservationList(): Observable<ReservationApi[]> {
    return this.httpClient.get<ReservationApi[]>(`${environment.apiUrl}/reservations`);
  }

  public fetchReservations(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/reservations`);
  }
}
