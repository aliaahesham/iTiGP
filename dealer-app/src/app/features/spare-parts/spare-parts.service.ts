import { SparePart } from '../../_models/spare-parts/spare-parts';

export class SparePartsService {
    data: SparePart[];
    constructor() {
        this.data = [
            { id: 1, name: 'Engine Oil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 3, makingId: 1, modelId: 4, price: 493, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=13637078&lng=en&ccf=21876022', code: 'C123', seller: 'tafanin' },

            { id: 2, name: 'Outside Mirror', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 1, makingId: 2, modelId: 6, price: 3296, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=7030311&lng=en&ccf=21876022', code: 'C123', seller: 'Xperience' },

            { id: 3, name: 'Headlights', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 2, makingId: 2, modelId: 7, price: 2487, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=8350305&lng=en&ccf=21876022', code: 'C123', seller: 'Xperience' },

            { id: 4, name: 'Radiator', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 3, makingId: 3, modelId: 10, price: 5252, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=7063303&lng=en&ccf=21876022', code: 'C123', seller: 'Xperience' },
        ]
    }

    getAll(): SparePart[] {
        return this.data;
    }

    getById(id: number): SparePart {
        return this.data.find(s => s.id === id);
    }
    getBySeller(name: string): SparePart[] {
        return this.data.filter((a) => a.seller.toLowerCase() === name.toLowerCase());
    }
    add(sparePart: SparePart) {
        sparePart.id = this.data.length + 1;
        this.data.push(sparePart);
    }

    update(sparePart: SparePart) {
        const i = this.data.findIndex(s => s.id === sparePart.id);
        this.data[i] = sparePart;


    }

    delete(id: number) {
        const i = this.data.findIndex(s => s.id === id);
        this.data.splice(i, 1);
    }
}
