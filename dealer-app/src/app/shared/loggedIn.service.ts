import { Injectable } from '@angular/core';
import { Seller } from 'src/app/_model/seller';
@Injectable({
    providedIn: 'root'
})
export class LoggedInSellerService {
    loggedInSeller: Seller;
    constructor() {

    }

    SetSeller(seller) {
        this.loggedInSeller = seller;
    }
    GetSeller() {
        return this.loggedInSeller;
    }
}
