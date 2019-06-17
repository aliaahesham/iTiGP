import { making } from 'src/app/_models/car/making';

export class makingService {
    data: making[];
    constructor() {
        this.data = [
            {
                id: 1, name: 'Ford',
                models: [
                    { id: 1, name: 'Focus' },
                    { id: 2, name: 'Kuga' },
                    { id: 3, name: 'Festa' },
                    { id: 4, name: 'Fusion' }
                ]
            },
            {
                id: 2, name: 'Hyundai',
                models: [
                    { id: 5, name: 'Verna' },
                    { id: 6, name: 'Accent' },
                    { id: 7, name: 'new Accent' },
                    { id: 8, name: 'Elantra AD' },
                    { id: 9, name: 'Elantra HD' }
                ]
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