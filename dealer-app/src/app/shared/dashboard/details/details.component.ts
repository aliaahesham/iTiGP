import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/_models/seller';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() seller: Seller;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.seller)
  }

  AddNewProduct() {
    this.router.navigateByUrl('/seller/add/product');

  }
  SignOut() {
    this.seller = {};
    this.router.navigateByUrl('/seller/login');

  }

}
