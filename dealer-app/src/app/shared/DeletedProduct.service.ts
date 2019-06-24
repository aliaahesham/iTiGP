import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DeletedProductService {
    deletedProduct = {

        Kind: String,
        Id: Number,
    }
    constructor() {

    }

    SetDeletedProduct(kind, id) {
        this.deletedProduct.Kind = kind;
        this.deletedProduct.Id = id
    }
    GetDeletedProduct() {
        return this.deletedProduct;
    }
}
