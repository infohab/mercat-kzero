import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {
  public businessDetailsForm = this.formBuilder.group({
    contactName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    contactEmail: [null, [Validators.required, Validators.email]],
    serviceUnitName: [null, [Validators.required, Validators.minLength(3)]],
    address: [null, Validators.required],
    phone: [null, Validators.required],
    serviceType: [null, Validators.required],
    duration: [null, Validators.required]
  });

  public constructor(private formBuilder: FormBuilder) {}

  saveData() {
    console.log(this.businessDetailsForm.value);
  }

  public get contactName(): AbstractControl {
    return this.businessDetailsForm.get('contactName');
  }

  public get contactEmail(): AbstractControl {
    return this.businessDetailsForm.get('contactEmail');
  }

  public get serviceUnitName(): AbstractControl {
    return this.businessDetailsForm.get('serviceUnitName');
  }

  public get address(): AbstractControl {
    return this.businessDetailsForm.get('address');
  }

  public get phone(): AbstractControl {
    return this.businessDetailsForm.get('phone');
  }

  public get serviceType(): AbstractControl {
    return this.businessDetailsForm.get('serviceType');
  }

  public get duration(): AbstractControl {
    return this.businessDetailsForm.get('duration');
  }
}
