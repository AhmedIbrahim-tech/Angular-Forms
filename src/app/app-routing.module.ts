import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'DrivenForms', component: TemplateDrivenFormsComponent },
  { path: 'ReactiveForms', component: ReactiveformsComponent },
  { path: '**', redirectTo:'' , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
