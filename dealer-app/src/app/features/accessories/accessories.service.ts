import { Accessories } from 'src/app/_models/accessories/accessories';

export class AccessoriesService {
    data: Accessories[];
    constructor() {
        this.data = [
            { id: 1, name: "hamada", description: "hamada hamada", price: 100, images: ['assets/img/products/product-grey-1.jpg'], seller: { id: 1, name: "ahmed", image: "hamada", field: "hamada", password: "hamada" } },
            { id: 2, name: "hamada", description: "hamada hamada", price: 20, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 3, name: "hamada", description: "hamada hamada", price: 10, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 4, name: "hamada", description: "hamada hamada", price: 1000, images: ['assets/img/products/product-grey-1.jpg'], seller: { id: 2, name: "ahmed", image: "hamada", field: "hamada", password: "ahmed" } },
            { id: 5, name: "hamada", description: "hamada hamada", price: 110, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 6, name: "hamada", description: "hamada hamada", price: 80, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 7, name: "hamada", description: "hamada hamada", price: 2000, images: ['assets/img/products/product-grey-1.jpg'] },
            { id: 8, name: "hamada", description: "hamada hamada", price: 150, images: ['assets/img/products/product-grey-1.jpg'] }
        ]
    }
    getAll(): Accessories[] {
        return this.data;
    }
    getById(id: number): Accessories {
        return this.data.find((a) => a.id == id);
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