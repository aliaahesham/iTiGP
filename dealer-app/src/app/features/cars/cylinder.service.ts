import { cylinder } from 'src/app/_models/car/cylinder';

export class cylinderService{
    data:cylinder[];
    constructor(){
        this.data=[
            {id:1,cyl:'4 IN-LINE'},
            {id:2,cyl:'6 IN-LINE'},
            {id:3,cyl:'8 IN-LINE'},
        ]
    }
    getAll():cylinder[]{
        return this.data;
    }
    getById(id:number){
        return this.data.find(a=>a.id===id);
    }
    add(cylinder:cylinder){
        cylinder.id=this.data.length+1;
        this.data.push(cylinder);
    }
    update(cylinder:cylinder){
        const i = this.data.findIndex(a=> a.id===cylinder.id);
        this.data[i]=cylinder;
    }
    delete(id:number){
        const i = this.data.findIndex(a=>a.id ===id);
        this.data.splice(i,1);
    }
}