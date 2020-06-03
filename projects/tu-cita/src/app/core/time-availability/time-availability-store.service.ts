import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeAvailabilityApiService } from './time-availability-api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeAvailabilityStoreService {
  private timeAvailabilitySubject = new BehaviorSubject([]);
  public timeAvailability$ = this.timeAvailabilitySubject.asObservable();

  public constructor(private timeAvailabilityApiService: TimeAvailabilityApiService) {}

  public loadTimeAvailability(): void {
    this.timeAvailabilityApiService
      .getAvailableTime()
      .pipe(tap((timeAvailability) => this.timeAvailabilitySubject.next(timeAvailability)))
      .subscribe();
  }
}
