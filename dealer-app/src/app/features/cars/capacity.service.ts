import { capacity } from 'src/app/_models/car/capacity';


export class capacityService{
    data:capacity[];
    constructor(){
        this.data=[
            {id:1,cap:'2000 CC'},
            // {id:2,capacity:'1600 CC'},
            // {id:3,capacity:'1500 CC'},
        ]
    }
    getAll():capacity[]{
        return this.data;
    }
    getById(id:number){
        return this.data.find(a=>a.id===id);
    }
    add(capacity:capacity){
        capacity.id=this.data.length+1;
        this.data.push(capacity);
    }
    update(capacity:capacity){
        const i = this.data.findIndex(a=> a.id===capacity.id);
        this.data[i]=capacity;
    }
    delete(id:number){
        const i = this.data.findIndex(a=>a.id ===id);
        this.data.splice(i,1);
    }
}