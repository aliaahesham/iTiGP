import { model } from 'src/app/_models/car/model';

export class modelService{
    data:model[];
    constructor(){
        this.data=[
            {id:1,name:'Focus'},
            {id:2,name:'Kuga'},
            {id:3,name:'Festa'},
            {id:4,name:'Fusion'},

            // {id:1, making:{name:'ford'},capacity:{capacity:2000}, classification:'Level A', color:'gray' , model:{name:'Focuse RS',id:1}, fuelTank:50,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year:2018},
            // {id:2, making:{name:'ford'},capacity:{capacity:2000}, classification:'Level A', color:'gray' , model:{name:'Focuse RS',id:2}, fuelTank:50,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year:2018},
            // {id:3, making:{name:'ford'},capacity:{capacity:2000}, classification:'Level A', color:'gray' , model:{name:'Focuse RS',id:3}, fuelTank:50,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', year:2018}
        ]
    }
    getAll():model[]{
        return this.data;
    }
    getById(id:number){
        return this.data.find(a=>a.id===id);
    }
    add(model:model){
        model.id=this.data.length+1;
        this.data.push(model);
    }
    update(model:model){
        const i = this.data.findIndex(a=> a.id===model.id);
        this.data[i]=model;
    }
    delete(id:number){
        const i = this.data.findIndex(a=>a.id ===id);
        this.data.splice(i,1);
    }
}