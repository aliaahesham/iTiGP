import { Injectable } from '@angular/core';
import { Seller } from 'src/app/_models/seller';
// @Injectable({
//   providedIn: 'root'
// })
export class SellerService {
  sellers: Seller[];
  constructor() {
    this.sellers = [
      { id: 1, name: "RK Anjel", password: "123", image: "https://sortlist.gumlet.com/agencies/logos/000/077/544/original/f185e83d4f3781166a5a654812ab3e41data?w=60&h=60&format=auto&mode=fill", field: "cars" },
      { id: 2, name: "Tafanin", password: "123", image: "https://sortlist.gumlet.com/agencies/logos/000/068/368/original/be44bd8f3fcbb8a7f187923379b65f4ddata?w=60&h=60&format=auto&mode=fill", field: "spareParts" },
      { id: 3, name: "Xperience", password: "123", image: "https://sortlist.gumlet.com/agencies/logos/000/079/050/original/eeb9f731a76b89c89a625725f46e2f8ddata?w=60&h=60&format=auto&mode=fill", field: "accessories" },
    ];
  }

  GetAll() {
    return this.sellers;
  }
  GetById(id: number): Seller {

    return this.sellers.find(a => a.id === id);
  }
  GetByName(name: string): Seller {
    return this.sellers.find(a => a.name.toLocaleLowerCase() === name.toLocaleLowerCase());
  }
  Add(seller: Seller) {
    seller.id = this.sellers.length + 1;
    this.sellers.push(seller);
  }
  Update(seller: Seller) {
    const index = this.sellers.indexOf(this.GetById(seller.id));
    this.sellers[index] = seller;
  }
  Delete(id: number) {
    const index = this.sellers.indexOf(this.GetById(id));
    this.sellers.splice(index, 1);
  }
}
