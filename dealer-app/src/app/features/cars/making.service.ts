import { making } from 'src/app/_models/car/making';
import { Injectable } from '@angular/core';

@Injectable()
export class makingService {
    data: making[];
    constructor() {
        this.data = [
            {
                id: 1, name: 'Ford', modelId: [1, 2, 3, 4]
            },
            {
                id: 2, name: 'Hyundai',
                modelId: [5,6,7,8,9]
            },
            { id: 3, name: 'Kia' },
            { id: 4, name: 'Renault' },
        ]
    }
    getAll(): making[] {
        return this.data;
    }
    getById(id: number) {
        return this.data.find(a => a.id === id);
    }
    getByName(name:string){
        return this.data.find(a=> a.name===name);
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