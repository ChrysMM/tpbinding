import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';

const routes: Routes = [
  {
  path:'404',component:ErrorsComponent
  },
  {
    path:'**', redirectTo:'/404'
    }
  ];


@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorsModule { }