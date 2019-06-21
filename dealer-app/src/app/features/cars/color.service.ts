import { color } from '../../_models/car/color'

export class colorService{
    data:color[]
    constructor(){
        this.data=[
           {id:1,name:'Silver'},
           {id:2,name:'Blue'},
           {id:3,name:'DarkRed'}
        ]
    }
    getAll(){
        return this.data
    }
}