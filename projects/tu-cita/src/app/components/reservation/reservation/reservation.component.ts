import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReservationConfirmComponent } from '../reservation-confirm/reservation-confirm.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../../../core/reservation/reservation.service';
import { Reservation } from '../../../core/reservation/reservation.interface';
import { getReadableTime } from '../../../shared/utils';
import * as moment from 'moment';
import { SiteStoreService } from '../../../core/site/site-store.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  public getReadableTime = getReadableTime;
  public minDate = moment().toDate();
  public maxDate = moment().add(7, 'days').toDate();
  public availableTimeSlots = [1589540400000, 1589541300000, 1589542200000, 1589543100000, 1589544000000];
  public availableServices = [];
  public availableEmployees = [];
  public selectedSite$ = this.siteStoreService.selectedSite$;

  public reservationForm = this.formBuilder.group({
    place: [{ value: null, disabled: true }, Validators.required],
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    serviceType: [null, Validators.required],
    employee: [null, Validators.required],
    date: [this.minDate, Validators.required],
    time: [this.availableTimeSlots[0], Validators.required]
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
    } else if (this.siteStoreService.sites && siteId) {
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
        tap((site) => {
          if (site) {
            this.availableServices = site.serviciosUnit;
            this.availableEmployees = site.employees;
            this.reservationForm.patchValue({
              place: site.name,
              serviceType: this.availableServices[0],
              employee: this.availableEmployees[0]
            });
          } else {
            this.router.navigateByUrl('/');
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
        this.router.navigate(['/reservation-summary']);
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

  public onDateChange(): void {
    this.time.setValue(null);
  }
}
