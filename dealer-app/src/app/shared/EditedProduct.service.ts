import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class EditedProductService {
    editedProduct = {

        Kind: String,
        Id: Number,
    }
    constructor() {

    }

    SetEditedProduct(kind, id) {
        this.editedProduct.Kind = kind;
        this.editedProduct.Id = id
    }
    GetEditedProduct() {
        return this.editedProduct;
    }
}
