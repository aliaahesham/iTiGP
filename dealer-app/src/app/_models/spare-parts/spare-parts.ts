import { category } from '../spare-parts/category';

export interface SpareParts {
    id?: number;
    name?: string;
    categoryId?: number;
    category?: category;
    price?: number;
    image?: string;
}