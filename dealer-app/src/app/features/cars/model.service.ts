import { model } from 'src/app/_models/car/model';

export class modelService {
    data: model[];
    constructor() {
        this.data = [
            { id: 1, name: 'Focus', makingId: 1 },
            { id: 2, name: 'Kuga', makingId: 1 },
            { id: 3, name: 'Festa', makingId: 1 },
            { id: 4, name: 'Fusion', makingId: 1 },
            { id: 5, name: 'Verna', makingId: 2 },
            { id: 6, name: 'Accent', makingId: 2 },
            { id: 7, name: 'new Accent', makingId: 2 },
            { id: 8, name: 'Elantra AD', makingId: 2 },
            { id: 9, name: 'Elantra HD', makingId: 2 },
        ]
    }
    getAll(): model[] {
        return this.data;
    }
    getById(id: number) {
        return this.data.find(a => a.id === id);
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