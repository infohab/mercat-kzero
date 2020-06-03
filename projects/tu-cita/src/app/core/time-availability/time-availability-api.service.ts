import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeAvailabilityApiService {
  public constructor(private httpClient: HttpClient) {}

  public getAvailableTime(): Observable<any> {
    return this.fetchAvailableTime();
  }

  private fetchAvailableTime(): Observable<any> {
    const params = new HttpParams();
    params.append('fromDate', '2020-06-01');
    params.append('unitId', 'A2020B5C26D637260589810838838');
    params.append('toDate', '2020-06-15T23:59');
    params.append('resourceName', 'Pedro');
    return this.httpClient.get(`${environment.apiUrl}/availability`, {
      params,
      observe: 'response'
    });
  }
}
