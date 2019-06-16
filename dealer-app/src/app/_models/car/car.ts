import {making} from './making';
import {transimission} from './transimission';
import {model} from './model';
import {capacity} from './capacity';
import {cylinder} from './cylinder';

export interface car{
    id?:number;
    price?:number;
    making?:making;
    model?:model;
    classification?:string;
    color?:string;
    year?:number;
    transimission?:transimission;
    fuelTank?:number;
    description?:string;
    length?:number;
    width?:number;
    height?:number;
    cylinder?:cylinder;
    capacity?:capacity;

}