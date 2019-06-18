import { car } from 'src/app/_models/car/car';

export class carService {
    data: car[];
    constructor() {
        this.data = [
            // {id:1, making:{name:'ford'}, classification:'Level A', color:'gray' , model:{name:'Focuse RS'},description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'},

            { id: 1, code: "C123", seller: "Tafanin", making: { name: 'ford' }, classification: 'Level A', color: 'gray', model: { name: 'Focuse RS', id: 1 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 2, code: "X451", seller: "RK Anjel", making: { name: 'ford' }, classification: 'Level A', color: 'gray', model: { name: 'Focuse RS', id: 2 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 3, code: "FT21", seller: "Xperience", making: { name: 'ford' }, classification: 'Level A', color: 'gray', model: { name: 'Focuse RS', id: 3 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 }
        ]
    }
    getAll(): car[] {
        return this.data;
    }
    getById(id: number) {
        return this.data.find(a => a.id === id);
    }
    getBySeller(name: string): car[] {
        return this.data.filter((a) => a.seller === name);
    }
    add(car: car) {
        car.id = this.data.length + 1;
        this.data.push(car);
    }
    update(car: car) {
        const i = this.data.findIndex(a => a.id === car.id);
        this.data[i] = car;
    }
    delete(id: number) {
        const i = this.data.findIndex(a => a.id === id);
        this.data.splice(i, 1);
    }
}