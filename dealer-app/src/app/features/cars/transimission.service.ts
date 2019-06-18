import { transimission } from 'src/app/_models/car/transimission';

export class transimissionService{
    data:transimission[];
    constructor(){
        this.data=[
            {id:1,name:'Automatic'},
            {id:2,name:'Manual'},
            {id:3,name:'Automatic-Manual'},
        ]
    }
    getAll():transimission[]{
        return this.data;
    }
    getById(id:number){
        return this.data.find(a=>a.id===id);
    }
    add(transimission:transimission){
        transimission.id=this.data.length+1;
        this.data.push(transimission);
    }
    update(transimission:transimission){
        const i = this.data.findIndex(a=> a.id===transimission.id);
        this.data[i]=transimission;
    }
    delete(id:number){
        const i = this.data.findIndex(a=>a.id ===id);
        this.data.splice(i,1);
    }
}