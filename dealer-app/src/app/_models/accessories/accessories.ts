
import { Category } from './category';

export interface Accessories {
    id?: number;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    images?: string[];
    seller?: string;
    category?: Category;
}