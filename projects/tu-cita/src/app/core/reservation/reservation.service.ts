import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private subject = new Subject<any>();

  public sendClient(client): void {
    this.subject.next({ client });
  }

  public getClient(): Observable<any> {
    return this.subject.asObservable();
  }
}
