import { category } from '../../_models/spare-parts/category';

export class ProductService {
    data: category[];
    constructor() {
        this.data = [
            { id: 1, name: 'Interior & Exterior' },
            { id: 2, name: 'Electricity' },
            { id: 3, name: 'Mechanic' }
        ]
    }

    getAll(): category[] {
        return this.data;
    }

    getById(id: number): category {
        return this.data.find(c => c.id);
    }
}