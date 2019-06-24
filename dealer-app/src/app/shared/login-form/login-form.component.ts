import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/_models/seller';
import { SellerService } from '../seller.service';
import { LoggedInSellerService } from '../loggedIn.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  sellerLoginForm: FormGroup;

  allSellers: Seller[];

  errors: string;

  loggedInSeller: Seller;

  constructor(private sellerService: SellerService, private LoggedInSellerService: LoggedInSellerService, private router: Router) { }

  ngOnInit() {
    this.allSellers = this.sellerService.GetAll();
    this.sellerLoginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
    });
  }

  checkKey(e) {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }
  onSubmit() {
    // console.log(this.sellerLoginForm.value);

    if (this.sellerLoginForm.value.name === "" || this.sellerLoginForm.value.password === "") {
      this.errors = "*All fields are required";
    }
    else {
      this.loggedInSeller = this.sellerService.GetByName(this.sellerLoginForm.value.name);
      if (this.loggedInSeller) {
        if (this.loggedInSeller.password.toLocaleLowerCase() === this.sellerLoginForm.value.password.toLocaleLowerCase()) {
          this.LoggedInSellerService.SetSeller(this.loggedInSeller);
          this.router.navigateByUrl('/seller/dashboard');
        }
        else {
          this.errors = "*Incorrect password";
        }
      }
      else {
        this.errors = "*Invalid name";
      }
    }



  }
}
