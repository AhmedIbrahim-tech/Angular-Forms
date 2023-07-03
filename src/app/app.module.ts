import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule, // to use Forms in Angular
    ReactiveFormsModule // Must Add this module before use Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
