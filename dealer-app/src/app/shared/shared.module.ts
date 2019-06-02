import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'seller/login', component: LoginFormComponent }
    ])
  ]
})
export class SharedModule { }
