import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ReservationService {
  private subject = new Subject<any>();

  sendClient(client) {
    this.subject.next({ client });
  }

  getClient(): Observable<any> {
    return this.subject.asObservable();
  }
}
