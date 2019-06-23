import { car } from 'src/app/_models/car/car';
import {makingService} from './making.service'
// import { Injectable } from '@angular/core';

export class carService {
    data: car[];
    constructor() {
        this.data = [
            // {id:1, making:{name:'ford'}, classification:'Level A', color:'gray' , model:{name:'Focuse RS'},description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'},

            { id: 1, code: "C123" , seller: "Tafanin", making: { name: 'Ford' }, classification: 'Level A', color: 'Silver', model: { name: 'Focus RS', id: 1 }, fuelTank: 50, price:300000,
            year: 2018 , length:'4,570 (mm)', turbo:'Not Avaliable',abs:'Not Avaliable', transimission:'Automated',
               images:['https://pictures.topspeed.com/IMG/jpg/201705/the-2017-ford-focus-.jpg'] , capacity:{cap:'2000'}  ,cylinder:{cyl:'4 IN-LINE'}},
            { id: 2, code: "X451", seller: "RK Anjel", making: { name: 'Hyundai' }, classification: 'Level B', color: 'Blue', model: { name: 'new Accent', id: 2 }, fuelTank: 45, price:400000, 
             year: 2017,length:'4,570 (mm)', turbo:'Avaliable',abs:'Not Avaliable',transimission:'Automated',
             images:['https://www.bookyourcar.co.in/uploads/colorimage/14616_Marine%20Blue%20Xcent.jpg'], capacity:{cap:'2000'} ,cylinder:{cyl:'6 IN-LINE'} },
            
             { id: 3, code: "FT21", seller: "Xperience", making: { name: 'Kia' }, classification: 'Level A', color: 'DarkRed', model: { name: 'Rio', id: 3 }, fuelTank: 50, price:500000,
              year: 2018,length:'4,570 (mm)',turbo:'Not Avaliable',abs:'Avaliable',transimission:'Automated',
            images:['https://www.goauto.com.au/assets/contents/f5d966df72c1f246b255fbdcf1e44f4f32c0c422.jpg'] , capacity:{cap:'2000'} ,cylinder:{cyl:'4 IN-LINE'}},
            { id: 4, code: "Y742", seller: "Tomas Mikhaal", making: { name: 'Renault' }, classification: 'Level A', color: 'Blue', model: { name: 'Logan', id: 4 }, fuelTank: 55,price:280000,
               year: 2016,length:'4,570 (mm)', turbo:'Not Avaliable',abs:'Not Avaliable',transimission:'Manual',
            images:['https://i.pinimg.com/originals/4d/c5/25/4dc52579d5561f3290ec79862e9e14cf.png'] , capacity:{cap:'1400'} ,cylinder:{cyl:'6 IN-LINE'}},
            { id: 5, code: "M419", seller: "Jason Stathim", making: { name: 'Hyundai' }, classification: 'Level B', color: 'Silver', model: { name: 'Verna', id: 5 }, fuelTank: 50, price:600000,
             year: 2018,length:'4,570 (mm)', turbo:'Avaliable',abs:'Not Avaliable',transimission:'Manual',
            images:['https://imgd.aeplcdn.com/1056x594/cw/ec/25465/Hyundai-Verna-Exterior-118764.jpg?wm=0&q=80'] , capacity:{cap:'2000'} ,cylinder:{cyl:'4 IN-LINE'} },
            { id: 6, code: "H744", seller: "Van Disel", making: { name: 'Renault' }, classification: 'Level A', color: 'Silver', model: { name: 'Kadjar', id: 6 }, fuelTank: 60,price:400000,
             year: 2017 , length:'4,570 (mm)',  turbo:'Not Avaliable',abs:'Avaliable' ,transimission:'Manual',
            images:['https://gocar.be/picserver1/userdata/1/25733/VmlTxhioB/kfz45230038_img_6382.jpg'] , capacity:{cap:'1600'}  ,cylinder:{cyl:'6 IN-LINE'} },
            { id: 7, code: "P111" , seller: "Make Jonas", making: { name: 'Ford' }, classification: 'Level B', color: 'Blue', model: { name: 'Focus ST', id: 7 }, fuelTank: 50,price:500000,
               year: 2018 , length:'4,570 (mm)', turbo:'Avaliable',abs:'Not Avaliable',transimission:'Manual',
            images:['https://www.ford.co.uk/content/dam/guxeu/rhd/central/cars/2019-focus-st/future-vehicle/billboard/ford-focus-eu-ST_C519_S1_16x9-480x270.jpg'],cylinder:{cyl:'4 IN-LINE'} , capacity:{cap:'1600'}  },
            { id: 8, code: "S567", seller: "Caroline ", making: { name: 'Kia' }, classification: 'Level B', color: 'DarkRed', model: { name: 'Sportage', id: 8 }, fuelTank: 45, price:1000000,
              year: 2016  , length:'4,570 (mm)', turbo:'Not Avaliable',abs:'Avaliable',transimission:'Automated-Manual',
            images:['http://blogmedia.dealerfire.com/wp-content/uploads/sites/862/2017/07/scarletred_o.jpg'] , cylinder:{cyl:'6 IN-LINE'} ,capacity:{cap:'2000'}},
            { id: 9, code: "B729", seller: "Veronia", making: { name: 'Kia' }, classification: 'Level A', color: 'Silver', model: { name: 'Optima', id: 9 }, fuelTank: 50, price:2300000,
                 year: 2018 , length:'4,570 (mm)',  turbo:'Avaliable',abs:'Avaliable',transimission:'Automated-Manual',
            images:['https://images.dealer.com/ddc/vehicles/2019/Kia/Optima/Sedan/trim_LX_e25d5b/color/Sparkling%20Silver-KCS-186%2C186%2C186-640-en_US.jpg?impolicy=resize&w=650'] ,cylinder:{cyl:'4 IN-LINE'} , capacity:{cap:'1400'} },
            { id: 10, code: "V603", seller: "Petter", making: { name: 'Renault' }, classification: 'Level A', color: 'Blue', model: { name: 'Megan', id: 10 }, fuelTank: 55, price:300000,
              year: 2017  , length:'4,570 (mm)', turbo:'Avaliable',abs:'Avaliable',transimission:'Automated-Manual',
            images:['https://car-images.bauersecure.com/upload/30351/images/00003a43bf55-e731-4d49-8.jpg'], capacity:{cap:'2000'} ,cylinder:{cyl:'6 IN-LINE'} },
            { id: 11, code: "R123", seller: "Lemas", making: { name: 'Hyundai' }, classification: 'Level B', color: 'DarkRed', model: { name: 'Elantra', id: 11 }, fuelTank: 50, price:500000,
              year: 2018 , length:'4,570 (mm)',turbo:'Avaliable',abs:'Avaliable',transimission:'Automated-Manual',
             images:['https://s3.paultan.org/image/2015/03/hyundai-elantra-facelift-launched-30-630x318.jpg'] , capacity:{cap:'1600'} ,cylinder:{cyl:'4 IN-LINE'} },
             { id: 12, code: "C123" , seller: "Tafanin", making: { name: 'Ford' }, classification: 'Level A', color: 'DarkRed', model: { name: 'Fiesta', id: 12 }, fuelTank: 50, price:300000,
              year: 2018 ,length:'4,570 (mm)', turbo:'Avaliable',abs:'Avaliable' ,transimission:'Automated-Manual',
             images:['https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/styles/article_main_image/public/2017/11/_86a8175.jpg'], capacity:{cap:'2000'} ,cylinder:{cyl:'6 IN-LINE'}}
              
            
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
    getByMakingName(makingName:string){
        /*if(makingColor!='0')
            return this.data.filter(a=> a.making.name==makingName && a.color==makingColor);
        else*/
        return this.data.filter(a=> a.making.name==makingName);
    }
    getByMakingNameAndColorName(colorName:string, MakingName:any){
       console.log(MakingName,'-',colorName)
       console.log(this.data.filter(a=> a.color==colorName && a.making.name==MakingName))
        return this.data.filter(a=> 
            a.color==colorName && a.making.name==MakingName
        )

    }
    
    getByColor(color:string){
        return this.data.filter(a=>a.color==color);
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