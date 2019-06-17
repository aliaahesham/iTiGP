import { model } from 'src/app/_models/car/model';

export class modelService{
    data:model[];
    constructor(){
        this.data=[
            {id:1,name:'Focus'},
            {id:2,name:'Kuga'},
            {id:3,name:'Festa'},
            {id:4,name:'Fusion'},
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