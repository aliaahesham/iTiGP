import { car } from 'src/app/_models/car/car';
import {makingService} from './making.service'
// import { Injectable } from '@angular/core';

export class carService {
    data: car[];
    constructor() {
        this.data = [
            // {id:1, making:{name:'ford'}, classification:'Level A', color:'gray' , model:{name:'Focuse RS'},description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'},

            { id: 1, code: "C123" , seller: "Tafanin", making: { name: 'Ford' }, classification: 'Level A', color: 'gray', model: { name: 'Focuse RS', id: 1 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 2, code: "X451", seller: "RK Anjel", making: { name: 'Hyundai' }, classification: 'Level B', color: 'BabyBlue', model: { name: 'new Accent', id: 2 }, fuelTank: 45, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 3, code: "FT21", seller: "Xperience", making: { name: 'Kia' }, classification: 'Level A', color: 'DarkRed', model: { name: 'Rio', id: 3 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 4, code: "Y742", seller: "Tomas Mikhaal", making: { name: 'Renault' }, classification: 'Level A', color: 'BabyBlue', model: { name: 'Logan', id: 4 }, fuelTank: 55, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 5, code: "M419", seller: "Jason Stathim", making: { name: 'Hyundai' }, classification: 'Level B', color: 'Silver', model: { name: 'Verna', id: 5 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 6, code: "H744", seller: "Van Disel", making: { name: 'Renault' }, classification: 'Level A', color: 'Silver', model: { name: 'Kadjar', id: 6 }, fuelTank: 60, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 7, code: "P111" , seller: "Make Jonas", making: { name: 'Ford' }, classification: 'Level B', color: 'Black', model: { name: 'Escoda', id: 7 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 8, code: "S567", seller: "Caroline ", making: { name: 'Hyundai' }, classification: 'Level B', color: 'DarkRed', model: { name: 'new Accent', id: 8 }, fuelTank: 45, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 9, code: "B729", seller: "Veronia", making: { name: 'Kia' }, classification: 'Level A', color: 'Silver', model: { name: 'Sedona', id: 9 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 10, code: "V603", seller: "Petter", making: { name: 'Renault' }, classification: 'Level A', color: 'BabyBlue', model: { name: 'Megan', id: 10 }, fuelTank: 55, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            { id: 11, code: "R123", seller: "Lemas", making: { name: 'Hyundai' }, classification: 'Level B', color: 'DarkRed', model: { name: 'Elantra', id: 11 }, fuelTank: 50, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year: 2018 },
            
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