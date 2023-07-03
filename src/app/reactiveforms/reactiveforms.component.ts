//#region Fields
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IBaseValues } from '../Models/IBaseValues';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
//#endregion

export class ReactiveformsComponent {
  //#region Parameters
  ReagisterForm: FormGroup;
  ClientType: IBaseValues[] | undefined;
  //#endregion

  //#region constructor
  constructor(private formBuilder: FormBuilder) {
    //#region [ Client Type ] Select
    this.ClientType = [
      { id: 1, name: "Company" },
      { id: 2, name: "Client" },
      { id: 3, name: "Employee" },
      { id: 4, name: "Other" }
    ];
    //#endregion

    //#region Reagister Form
    this.ReagisterForm = new FormGroup({
      fullname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl(),
      phoneNo: new FormControl(),
      ClientType: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        postalCode: new FormControl(),
        street: new FormControl(),

      }),
    });
    //#endregion
  }
  //#endregion

  //#region Handle Functions
  onSubmit() {
    if (this.ReagisterForm.valid) {
      console.log(this.ReagisterForm.value);
      // Perform form submission logic here
    }
  }
  //#endregion

}
