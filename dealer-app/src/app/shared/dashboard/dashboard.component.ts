import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/_models/seller';
import { LoggedInSellerService } from '../loggedIn.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loggedInSeller: Seller;
  constructor(private LoggedInSellerService: LoggedInSellerService) { }

  ngOnInit() {
    this.loggedInSeller = this.LoggedInSellerService.GetSeller();
  }

}
