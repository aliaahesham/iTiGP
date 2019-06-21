import { model } from 'src/app/_models/car/model';

export class modelService {
    data: model[];
    constructor() {
        this.data = [
            { id: 1, name: 'Focus RS', makingId: 1 },
            { id: 2, name: 'Focus ST', makingId: 1 },
            { id: 3, name: 'Fiesta', makingId: 1 },
            { id: 4, name: 'Verna', makingId: 2 },
            { id: 5, name: 'new Accent', makingId: 2 },
            { id: 6, name: 'Elantra', makingId: 2 },
            { id: 7, name: 'Logan', makingId: 4 },
            { id: 8, name: 'Kadjar', makingId: 4 },
            { id: 9, name: 'Megan', makingId: 4 },
            { id: 10, name: 'Rio', makingId: 3 },
            { id: 11, name: 'Optima', makingId: 3 },
            { id: 12, name: 'Sportage', makingId: 3 },
        ]
    }
    getAll(): model[] {
        return this.data;
    }
    getById(id: number) {
        return this.data.find(a => a.id === id);
    }
    getBymakingId(makingId: number):any {
    // let carModels= this.data.filter(a => a.makingId == makingId);
    // let mapped = carModels.map(a=>a.name);
    //  return console.log(carModels)
    return this.data.filter(a => a.makingId == makingId);
    }
    add(model: model) {
        model.id = this.data.length + 1;
        this.data.push(model);
    }
    update(model: model) {
        const i = this.data.findIndex(a => a.id === model.id);
        this.data[i] = model;
    }
    delete(id: number) {
        const i = this.data.findIndex(a => a.id === id);
        this.data.splice(i, 1);
    }
}