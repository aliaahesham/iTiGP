import { Component, OnInit } from '@angular/core';
import { LoggedInSellerService } from "../../../loggedIn.service";
import { Seller } from 'src/app/_models/seller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  loggedInSeller: Seller;
  constructor(private loggedInSellerService: LoggedInSellerService, private router: Router) { }

  ngOnInit() {
    this.loggedInSeller = this.loggedInSellerService.GetSeller();

  }
  AddProduct(e) {
    let productName = e.target.innerHTML;
    if (productName === "Spare Part")
      productName = "spareParts";
    else if (productName === "Car")
      productName = "car";
    else if (productName === "Accessory")
      productName = "accessory";

    this.router.navigateByUrl(`${productName}/add`);

  }
}
