import { Component } from '@angular/core';
import { IBaseValues } from '../Models/IBaseValues';
import { IClient } from '../Models/IClient';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
  //#region Parameters
  formData: IClient = {} as IClient;
  ClientType: IBaseValues[] | undefined;
  //#endregion

  //#region constructor
  constructor() {
    this.ClientType = [
      { id: 1, name: "Company" },
      { id: 2, name: "Client" },
      { id: 3, name: "Employee" },
      { id: 4, name: "Other" }
    ];
  }
  //#endregion

  //#region Handle Functions
  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted!', this.formData);
  }
  //#endregion
}
