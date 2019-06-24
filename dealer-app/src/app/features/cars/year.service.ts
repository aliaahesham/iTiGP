import {year} from '../../_models/car/year';
export class yearService{
      data:year[]
      constructor(){
          this.data = [
              {year:2016},
              {year:2017},
              {year:2018},
          ]
      }
      getAll():year[]{
          return this.data;
      }
}
