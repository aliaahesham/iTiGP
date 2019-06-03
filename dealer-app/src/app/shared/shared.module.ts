import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginFormComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'seller/login', component: LoginFormComponent },
      { path: 'seller/dashboard', component: DashboardComponent }
    ])
  ]
})
export class SharedModule { }
