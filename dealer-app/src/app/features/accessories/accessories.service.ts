import { Accessories } from 'src/app/_models/accessories/accessories';

export class AccessoriesService {
    data: Accessories[];
    constructor() {
        this.data = [
            { id: 1, code: "C123", seller: "Tafanin", name: "Radiator", description: "Car Accessories for Jeep Grand Cherokee of radiator tank and Auto Aluminum Radiator DPI:2336 ", price:100, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 2, code: "X451", seller: "RK Anjel", name: "brake pump", description: " Air in the Lines: The number one most common cause for having to pump your brakes to get them to work is air in the lines", price: 20, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 3, code: "FT21", seller: "Xperience", name: "Cowl screen", description: " is the front part of the automobile's frame that supports the rear of the hood, windshield, dashboard", price: 10, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 4, code: "G523", seller: "Tafanin", name: "Front clip", description: " refers to the entire front portion of the car from the front doors / side mirrors forward", price: 1000, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 5, code: "R87P", seller: "RK Anjel", name: "Armor Vacuum Cleaner", description: " can do wonders for the cleanliness of your vehicle", price: 110, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 6, code: "FT22", seller: "Xperience", name: "HUD", description: "turns any smartphone into a heads-up display (HUD) for your vehicle", price: 80, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 7, code: "PL56", seller: "Xperience", name: "Puncture repair kit", description: "They're designed to be easy to use and are quicker than replacing a wheel", price: 2000, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 8, code: "FH56", seller: "Xperience", name: "Car cover", description: "A cover keeps a car dirt and dust free when parked besides bird droppings, rain sunlight and the elements", price: 150, images: ['assets/img/products/product-grey-1.jpg'] }
        ]
    }
    getAll(): Accessories[] {
        return this.data;
    }
    getById(id: number): Accessories {
        return this.data.find((a) => a.id === id);
    }
    getBySeller(name: string): Accessories[] {
        return this.data.filter((a) => a.seller === name);
    }
    add(newProduct: Accessories): void {
        newProduct.id = this.data.length;
        this.data.push(newProduct);
    }
    update(updatedProduct: Accessories): void {
        const index = this.data.indexOf(this.getById(updatedProduct.id));
        this.data[index] = updatedProduct;
    }
    delete(id: number): void {
        const i = this.data.findIndex((a) => a.id == id);
        this.data.splice(i, 1);
    }
}