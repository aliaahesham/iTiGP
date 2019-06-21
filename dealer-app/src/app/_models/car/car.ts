import { making } from './making';
import { transimission } from './transimission';
import { model } from './model';
import { capacity } from './capacity';
import { cylinder } from './cylinder';

export interface car {
    id?: number;
    code?: string;
    price?: number;
    making?: making;
    makingId?:number;
    model?: model;
    classification?: string; //interface
    color?: string;
    year?: number;
    transimission?:string;
    fuelTank?: number;
    description?: string;
    length?: string;
    width?: string;
    height?: string;
    cylinder?: cylinder;
    capacity?: capacity;
    type?: string; //interface
    abs?: string; //avaliable or not 
    images?: string[];
    turbo?: string; //avaliable or not
    seller?: string;
}