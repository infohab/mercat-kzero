import { Component, OnInit } from '@angular/core';
import { TimeAvailabilityStoreService } from '../../../core/time-availability/time-availability-store.service';
@Component({
  selector: 'app-time-availability',
  templateUrl: './time-availability.component.html',
  styleUrls: ['./time-availability.component.scss']
})
export class TimeAvailabilityComponent implements OnInit {
  public timeAvailability$ = this.timeAvailabilityStoreService.timeAvailability$;

  public constructor(private timeAvailabilityStoreService: TimeAvailabilityStoreService) {}

  public ngOnInit(): void {
    this.timeAvailabilityStoreService.loadTimeAvailability();
  }
}
