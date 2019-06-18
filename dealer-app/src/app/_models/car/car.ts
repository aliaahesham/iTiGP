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
    transimission?: transimission;
    fuelTank?: number;
    description?: string;
    length?: number;
    width?: number;
    height?: number;
    cylinder?: cylinder;
    capacity?: capacity;
    type?: string; //interface
    ABS?: string; //avaliable or not 
    images?: string[];
    turbo?: boolean;


}