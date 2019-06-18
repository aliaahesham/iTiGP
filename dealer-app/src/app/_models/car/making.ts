import { model } from './model';

export interface making{
    id?:number;
    name?:string;
    modelId?: number[];
    models?: model[];
}