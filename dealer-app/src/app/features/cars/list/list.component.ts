import { Component, OnInit,Input, HostListener, Output } from '@angular/core';
import { carService } from '../car.services';
import {makingService} from '../making.service';
import {modelService} from '../model.service';
import {colorService} from '../color.service';
import {yearService} from '../year.service'
import { car } from 'src/app/_models/car/car';
import {year} from 'src/app/_models/car/year';
import { capacity } from 'src/app/_models/car/capacity';
import {capacityService} from '../capacity.service';
import {cylinderService} from '../cylinder.service';
import {making} from 'src/app/_models/car/making';
import {model} from 'src/app/_models/car/model';
import {color} from 'src/app/_models/car/color';
import { EventListener } from 'ngx-bootstrap/utils/facade/browser';

@Component({
  selector: 'app-cars',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cars:car[];
  @Input() making:making[];
  @Input() models:model[];
  @Input() allModels:making[];
  @Input() modelss:string[];
  @Input() makingName:string;
  @Input() modelName:string;
  @Input() specificMakingName :car[];
  @Input() specificColor:car[];
  @Input() colors:color[];
  @Input() makingNameColored:car[];
  @Input() colorSelect:any;
  @Input() makingSelect:string;
  @Input() yearProduction:year[];
  p: number = 1;
  collection: any[] ;
  
  display:boolean;
  isMaking: boolean;
  isModel: boolean;
  selectedValue:string;
   

  constructor(
    private carService:carService,
    private makingService:makingService,
    private modelService :modelService,
    private colorService :colorService,
    private yearService :yearService,
    ) {
      this.isMaking = true;
      this.isModel = true;
     }

  ngOnInit() {
    this.cars=this.carService.getAll();
    this.making=this.makingService.getAll();
    this.colors=this.colorService.getAll();
    this.yearProduction= this.yearService.getAll();
    this.display=true;
    
    // this.allModels=this.makingService.getByName('Ford');
    
    // console.log(this.allModels.map(a=>a.models[name]));
  }
  onChange(makingName: Event , coloredSelect:any) {
    console.log(coloredSelect)
    let selectElementValue = makingName.target['options']
    [makingName.target['options'].selectedIndex].value;
    let selectoption= selectElementValue as number;
    this.makingName = makingName.target['options']
    [makingName.target['options'].selectedIndex].text;
    // let selectoptionText= selectElementText as number;
    this.colorSelect=coloredSelect.options[coloredSelect.selectedIndex].text;
    if (this.colorSelect=='ALL COLORS' && this.makingName=='ALL MAKINGS'){
      this.specificMakingName=this.carService.getAll();
      this.display=false;
      console.log('if');
   }
   else {
     this.display=true;
     if(this.makingName!='ALL MAKINGS' && this.colorSelect=='ALL COLORS'){
      this.specificMakingName=this.carService.getByMakingName(this.makingName );
      this.models=this.modelService.getBymakingId(selectoption);
      this.modelss= this.models.map(a=>a.name);
     }
     else{
       if(this.colorSelect!='ALL COLORS' && this.makingName=='ALL MAKINGS'){
        this.specificMakingName=this.carService.getByColor(this.colorSelect)
       }
        else{

          this.specificMakingName=this.carService.getByMakingNameAndColorName(this.colorSelect,this.makingName);
          this.models=this.modelService.getBymakingId(selectoption);
          this.modelss= this.models.map(a=>a.name);
        }
     }
     //      this.makingNameColored= this.carService.getByMakingNameAndColorName(this.coloredName,this.makingName)
     console.log('else');
    }
           if(this.display==false){
             this.specificMakingName=this.carService.getAll();
           }
   //this.selectedValue  = coloredSelect.value;
       console.log(selectElementValue);
       console.log(this.models); 
       console.log(this.makingName)
       console.log(this.modelss);
       console.log(coloredSelect.options[coloredSelect.selectedIndex].text);
       
}
// clickValue(value:Event){
//   let x= value.target.value
// }
@HostListener('click')
clickFunction(modelName:Event){
  // this.modelName = modelName.target['options']
  // [modelName.target['options'].selectedIndex].text;
  // console.log(this.modelName);
   return this.modelss;
}
// @HostListener('click')
colorFunction(colorName:Event, makingSelected:HTMLSelectElement){
  let selectColor = colorName.target['options']
    [colorName.target['options'].selectedIndex].text;
    let colored =selectColor as string;
    // let col = colorName;
   this.makingSelect=makingSelected.options[makingSelected.selectedIndex].text;
   console.log(this.makingSelect);
    // console.log(colored);
    // console.log(col);
    if(this.makingSelect=='ALL MAKINGS' && colored=='ALL COLORS'){
      this.specificColor=this.carService.getAll();
      console.log('if color');
    }
    else{
      if(this.makingSelect=='ALL MAKINGS' && colored != 'ALL COLORS'){
        this.specificMakingName=this.carService.getByColor(colored);   
      }
      else{
         if(colored=='ALL COLORS'){
          this.specificMakingName=this.carService.getByMakingName(this.makingSelect)
         
         }
         else{
           this.specificMakingName=this.carService.getByMakingNameAndColorName(selectColor,this.makingSelect);
           console.log('if else color')
         }
      }
      // this.specificMakingName=this.carService.getAll()
    }
    // this.specificColor=this.carService.getAll();

    // this.display=false;
    // return colored
}
YearFunction(yearProd:Event){
  let year = yearProd.target['options']
  [yearProd.target['options'].selectedIndex].text;
  let yearNum =year as string; 
  if (yearNum == 'YEAR PRODUCTION'){
    this.specificMakingName=this.carService.getAll();
  }
  else{
    this.specificMakingName=this.carService.getByYear(year);
  }
  console.log(yearNum) ;

}

// changeHandler(data:string){
//  console.log(data);
// }
}
