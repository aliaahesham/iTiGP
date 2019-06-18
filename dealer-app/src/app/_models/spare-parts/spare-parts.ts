import { category } from './category';
import { making } from '../../_models/car/making';
import { model } from '../../_models/car/model';

export interface SparePart {
    id?: number;
    name?: string;
    categoryId?: number;
    category?: category;
    makingId?: number;
    making?: making;
    modelId?: number;
    model?: model;
    price?: number;
    image?: string;
    code?: string;
    seller?: string;
}