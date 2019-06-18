import { Seller } from '../seller';
import { Category } from './category';

export interface Accessories {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    images?: string[];
    seller?: Seller;
    category?: Category;
}