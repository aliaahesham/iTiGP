
import { Category } from './category';

export interface Accessories {
    id?: number;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    seller?: string;
    sellerId?: number;
    category?: Category;
    categoryId?: number;
}