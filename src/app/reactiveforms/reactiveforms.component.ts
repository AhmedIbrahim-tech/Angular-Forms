//#region Fields
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IBaseValues } from '../Models/IBaseValues';
import { IUser } from '../Models/IUser';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
//#endregion

export class ReactiveformsComponent implements OnInit {
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

    //#region Reagister Form (OLD Syntax)
    // this.ReagisterForm = new FormGroup({
    //   fullname: new FormControl('' , [Validators.required , Validators.pattern('[A-za-z]{3,}')]),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmpassword: new FormControl(''),
    //   phoneNo: new FormControl(''),
    //   ClientType: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street: new FormControl(''),

    //   }),
    // });
    //#endregion

    //#region Reagister Form (NEW Syntax)
    this.ReagisterForm = formBuilder.group({
      fullname: ['', [Validators.required, Validators.pattern('[A-za-z]{3,}')]],
      email: formBuilder.control(''),
      password: [''],
      confirmpassword: [''],
      phoneNo: this.formBuilder.array([this.formBuilder.control('')]),
      ClientType: [''],
      address: formBuilder.group({
        city: [''],
        postalCode: [''],
        street: [''],

      }),
    });
    //#endregion

  }

  //#endregion

  ngOnInit(): void {
    // this.ReagisterForm.patchValue({
    //   fullname: 'Ahmed',
    //   email: 'admin@admin.com',
    //   password: '123456',
    //   confirmpassword: '123456',
    //   // phoneNo: '123456',
    //   ClientType: 'Client',
    //   address: {
    //     city: 'Cairo',
    //     postalCode: '123456',
    //     street: '3st alemam',
    //   }
    // });
}

  //#region Handle Functions
  onSubmit() {
    if (this.ReagisterForm.valid) {
      let Model = this.ReagisterForm.value as IUser;
      // let Model : IUser = this.ReagisterForm.value as IUser;
      // let Model : IUser = <IUser> this.ReagisterForm.value;
      console.log(Model);
      // Perform form submission logic here
      // Call Api, Send Model
    }
  }

  addNewPhonenumber(){
    // this.GetPhoneNumbers.controls.push(new FormControl(''));
    this.GetPhoneNumbers.push(this.formBuilder.control(''));
  }
  //#endregion

  //#region Get Attributes
  get Getfullname() {
    return this.ReagisterForm.get('fullname');
  }

  get GetPhoneNumbers() {
    return this.ReagisterForm.get('phoneNo') as FormArray;
  }
  //#endregion

  //#region Fill-Form with setValue
  fillFormWithSetValue() {
    // when Use setValue → Must provide all properties
    this.ReagisterForm.setValue({
      fullname: 'Ahmed',
      email: 'admin@admin.com',
      password: '123456',
      confirmpassword: '123456',
      // phoneNo: '123456',
      ClientType: 'Client',
      address: {
        city: 'Cairo',
        postalCode: '123456',
        street: '3st alemam',
      }
    });
  }
  //#endregion

    //#region Fill-Form with patchValue
    fillFormWithPatchValue() {
      // Call API to get User Data
      // when Use patchValue → don't Must provide all properties (can provide some properties)
      this.ReagisterForm.patchValue({
        fullname: 'Ahmed',
        email: 'admin@admin.com',
        password: '123456',
        confirmpassword: '123456',
        phoneNo: '123456',
        ClientType: 'Client',
        address: {
          city: 'Cairo',
          postalCode: '123456',
          street: '3st alemam',
        }
      });
    }
    //#endregion
}
