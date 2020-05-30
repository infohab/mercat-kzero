import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReservationConfirmComponent } from '../reservation-confirm/reservation-confirm.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../../../core/reservation/reservation.service';
import { Reservation } from '../../../core/reservation/reservation.interface';
import { getReadableTime } from '../../../shared/utils';
import * as moment from 'moment';
import { SiteStoreService } from '../../../core/site/site-store.service';
import { tap, catchError } from 'rxjs/operators';
import { WorkingDay } from '../../../shared/interfaces/working-day.class';
import { WorkingSegment } from '../../../shared/interfaces/working-segment.class';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit {
  public getReadableTime = getReadableTime;
  public minDate = moment().toDate();
  public maxDate = moment().add(7, 'days').toDate();
  public workingDays = [];
  public availableTimeSlots = [];
  public availableServices = [];
  public availableEmployees = [];
  public selectedSite$ = this.siteStoreService.selectedSite$;
  public availableDateFilter = (date: Date | null): boolean => {
    const day = (date || new Date()).getDay();
    return (this.workingDays || [1, 2]).includes(day);
  };

  public reservationForm = this.formBuilder.group({
    place: [{ value: null, disabled: true }, Validators.required],
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    serviceType: [null, Validators.required],
    employee: [''],
    date: [null, Validators.required],
    time: [null, Validators.required]
  });

  public constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private reservationService: ReservationService,
    private siteStoreService: SiteStoreService
  ) {}

  public ngOnInit(): void {
    const siteId = this.activeRoute.snapshot.queryParams['site'];
    if (this.siteStoreService.selectedSite) {
      this.place.patchValue(this.siteStoreService.selectedSite.name);
    } else if (this.siteStoreService.sites || siteId) {
      const site = this.siteStoreService.sites.find((site) => site.id === siteId);
      if (site) {
        this.siteStoreService.selectedSite = site;
      } else {
        this.siteStoreService.loadSiteById(siteId);
      }
    } else {
      this.router.navigateByUrl('/');
    }

    this.siteStoreService.selectedSite$
      .pipe(
        catchError(() => this.handleError),
        tap((site) => {
          if (site) {
            this.availableServices = site.serviciosOfUnit;
            this.availableEmployees = site.resources;
            this.workingDays = site.workingDays.map((d) => d.dayOfWeek);
            this.reservationForm.patchValue({
              place: site.name,
              serviceType: this.availableServices[0]
            });
          }
        })
      )
      .subscribe();
  }

  public get place(): AbstractControl {
    return this.reservationForm.get('place');
  }

  public get name(): AbstractControl {
    return this.reservationForm.get('name');
  }

  public get employee(): AbstractControl {
    return this.reservationForm.get('employee');
  }

  public get serviceType(): AbstractControl {
    return this.reservationForm.get('serviceType');
  }

  public get date(): AbstractControl {
    return this.reservationForm.get('date');
  }

  public get time(): AbstractControl {
    return this.reservationForm.get('time');
  }

  public saveReservation(reservationData: Reservation): void {
    const dialogRef = this.dialog.open(ReservationConfirmComponent, {
      autoFocus: false,
      disableClose: true,
      data: reservationData
    });
    dialogRef.afterClosed().subscribe((saveReservation) => {
      if (saveReservation) {
        this.reservationService.reservation = reservationData;

        this.reservationService
          .bookReservation(reservationData)
          .pipe(tap(() => this.router.navigate(['/reservation-summary'])))
          .subscribe();
      }
    });
  }

  public onServiceChange(): void {
    if (
      this.employee.value?.servicios &&
      !this.employee.value.servicios?.some((d) => d.serviceTypeId === this.serviceType.value?.serviceTypeId)
    ) {
      this.employee.setValue(null);
    }
    this.onEmployeeChange();
  }

  public onEmployeeChange(): void {
    this.date.setValue(null);
    this.time.setValue(null);
  }

  public onDateChange({ target }): void {
    this.time.patchValue(null);
    const date = moment(target.value);
    const mappedToMoment = this.getWorkingSegmentFromDay(date.day()).map(this.parseSegmentToMoment);
    this.availableTimeSlots = this.flatDeep(mappedToMoment);
  }

  public handleError(): void {
    this.router.navigateByUrl('/');
  }

  private getWorkingSegmentFromDay(day: number): WorkingSegment[] {
    const workingDay = this.findWorkingDay(day);
    return workingDay.workingSegments;
  }

  private findWorkingDay(day: number): WorkingDay {
    return this.siteStoreService.selectedSite.workingDays.find((w) => w.dayOfWeek === day);
  }

  private parseSegmentToMoment({ startTime, endTime }): moment.Moment[] {
    return [moment().set(startTime), moment().set(endTime)];
  }

  private flatDeep(array, deep = 1): moment.Moment[] {
    return deep > 0
      ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.flatDeep(val, deep - 1) : val), [])
      : array.slice();
  }
}
