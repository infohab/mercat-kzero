import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  public reservationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    serviceType: ['', Validators.required],
    employee: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required]
  });

  public constructor(private formBuilder: FormBuilder) {}

  public onServiceChange(): void {
    this.employee.setValue(null);
    this.date.setValue(null);
    this.time.setValue(null);
  }

  public onEmployeeChange(): void {
    this.date.setValue(null);
    this.time.setValue(null);
  }

  public onDateChange(): void {
    this.time.setValue(null);
  }

  public get name() {
    return this.reservationForm.get('name');
  }

  public get employee() {
    return this.reservationForm.get('employee');
  }

  public get date() {
    return this.reservationForm.get('date');
  }

  public get time() {
    return this.reservationForm.get('time');
  }
}
