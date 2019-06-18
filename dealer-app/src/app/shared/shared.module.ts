import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SellerService } from './seller.service';
import { LoggedInSellerService } from './loggedIn.service';
import { CoreModule } from '../core/core.module';
import { DetailsComponent } from './dashboard/details/details.component';
import { ProductsDataComponent } from './dashboard/products-data/products-data.component';
@NgModule({
  declarations: [LoginFormComponent, DashboardComponent, DetailsComponent, ProductsDataComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'seller/login', component: LoginFormComponent },
      { path: 'seller/dashboard', component: DashboardComponent }
    ])
  ],
  providers: [SellerService, LoggedInSellerService]
})
export class SharedModule { }
