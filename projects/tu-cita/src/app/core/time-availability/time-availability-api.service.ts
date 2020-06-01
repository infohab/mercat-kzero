import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeAvailabilityApiService {
  public constructor(private httpClient: HttpClient) {}

  public getAvailableTime(): Observable<any[]> {
    return this.fetchAvailableTime();
  }

  private fetchAvailableTime(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/availability`);
  }
}
