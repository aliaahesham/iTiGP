import { SparePart } from '../../_models/spare-parts/spare-parts';
import { type } from 'os';

export class SparePartsService {
    data: SparePart[];
    constructor() {
        this.data = [
            { id: 1, name: 'Engine Oil', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 3, makingId: 1, modelId: 4, price: 493, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=13637078&lng=en&ccf=21876022', code: 'C123', seller: 'tafanin' },

            { id: 2, name: 'Outside Mirror', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 1, makingId: 2, modelId: 6, price: 3296, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=7030311&lng=en&ccf=21876022', code: 'C123', seller: 'Xperience' },

            { id: 3, name: 'Headlights', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 2, makingId: 2, modelId: 7, price: 2487, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=8350305&lng=en&ccf=21876022', code: 'C123', seller: 'Xperience' },

            { id: 4, name: 'Radiator', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', categoryId: 3, makingId: 3, modelId: 10, price: 5252, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=7063303&lng=en&ccf=21876022', code: 'C123', seller: 'Xperience' },

            { id: 5, name: 'Heat Exchanger', description: 'for vehicles with air conditioning (manually controlled), for vehicles without air conditioning', categoryId: 3, makingId: 4, modelId: 7, price: 7076, image: 'https://cdn.autoteiledirekt.de/thumb?m=1&id=1104009&lng=en&n=0&ccf=21876023', code: 'C123', seller: 'tafanin' }
        ]
    }

    getAll(): SparePart[] {
        return this.data;
    }

    getFiltered(makingId: number, modelId: number, categoryId: number): SparePart[] {
        //console.log(categoryId);
        let newData: SparePart[];
        if (categoryId == 0) {
            newData = this.data.filter(a => a.categoryId != 0)
        } else {
            newData = this.data.filter(a => a.categoryId === categoryId)
        }
        if (makingId == 0) {
            newData = newData.filter(a => a.makingId != 0)
        } else {
            newData = newData.filter(a => a.makingId === makingId)
        }
        if (modelId == 0) {
            newData = newData.filter(a => a.modelId != 0)
        } else {
            newData = newData.filter(a => a.modelId === modelId)
        }
        return newData;
        /**
         * return this.data.filter(
            a => a.categoryId === categoryId && a.makingId === makingId && a.modelId === modelId ||
                a.makingId === makingId && a.modelId === modelId ||
                a.categoryId === categoryId && a.makingId === makingId ||
                a.categoryId === categoryId && a.modelId === modelId ||
                a.modelId === modelId ||
                a.categoryId === categoryId ||
                a.makingId === makingId
        )
         */

    }

    getById(id: number): SparePart {
        return this.data.find(s => s.id === id);
    }

    getByMakingId(makingId: number): SparePart {
        return this.data.find(s => s.makingId === makingId)
    }

    getByModelId(modelId: number): SparePart {
        return this.data.find(s => s.modelId === modelId)
    }

    getByCategoryId(categoryId: number): SparePart {
        return this.data.find(s => s.categoryId === categoryId)
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

    getPrice(id: number) {
        let result: number;
        const sparePart = this.data.find(s => s.id === id);
        if (sparePart.discount) {
            result = sparePart.price - sparePart.discount;
        } else {
            result = sparePart.price;
        }
        return result;
    }
}
