import { Category } from "src/app/_models/accessories/category";

export class CategoryService {
    categories: Category[] = [
        { id: 1, name: 'Car Cover' },
        { id: 2, name: 'Car Cleaning' },
        { id: 3, name: 'Wheel Cover' },
        { id: 4, name: 'Car Seat Cover' },
    ];
    getAll(): Category[] {
        return this.categories;
    }
}
