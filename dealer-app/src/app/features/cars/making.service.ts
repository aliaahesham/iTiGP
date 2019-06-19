import { making } from 'src/app/_models/car/making';
import { Injectable } from '@angular/core';

@Injectable()
export class makingService {
    data: making[];
    constructor() {
        this.data = [
            {
                id: 1, name: 'Ford',
                models: [
                    { id: 1, name: 'Focus ST' },
                    { id: 2, name: 'Focus RS' },
                    { id: 3, name: 'Fiesta' },
                ]
            },
            {
                id: 2, name: 'Hyundai',
                models:[
                    { id: 1, name: 'new Accent' },
                    { id: 2, name: 'Verna' },
                    { id: 3, name: 'Elantra' }, 
                ],
                modelId: [5,6,7,8,9]
            },
            {
                id: 3, name: 'Kia',
                models: [
                    { id: 1, name: 'Rio' },
                    { id: 2, name: 'Optima' },
                    { id: 3, name: 'Sportage' },
                ]
            },
            { id: 4, name: 'Renault',
             models:[
                { id: 1, name: 'Logan' },
                { id: 2, name: 'Kadjar' },
                { id: 3, name: 'Megan' },
             ] },
        ]
    }
    getAll(): making[] {
        return this.data;
    }
    getById(id: number) {
        return this.data.find(a => a.id === id);
    }
    getByName(name:string){
        return this.data.filter(a=> a.name===name);
    }
    add(making: making) {
        making.id = this.data.length + 1;
        this.data.push(making);
    }
    update(making: making) {
        const i = this.data.findIndex(a => a.id === making.id);
        this.data[i] = making;
    }
    delete(id: number) {
        const i = this.data.findIndex(a => a.id === id);
        this.data.splice(i, 1);
    }
}