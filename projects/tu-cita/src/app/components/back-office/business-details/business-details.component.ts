import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {
  public businessDetailsForm = this.formBuilder.group({
    contactName: [null, Validators.required],
    contactEmail: [null, Validators.required],
    serviceUnitName: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required],
    serviceType: [null, Validators.required],
    duration: [null, Validators.required]
  });

  public constructor(private formBuilder: FormBuilder) {}
}
