import { Component, OnInit,Input, HostListener, Output } from '@angular/core';
import { carService } from '../car.services';
import {makingService} from '../making.service';
import {modelService} from '../model.service';
import {colorService} from '../color.service'
import { car } from 'src/app/_models/car/car';
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
  display:boolean;
  isMaking: boolean;
  isModel: boolean;
 
   

  constructor(
    private carService:carService,
    private makingService:makingService,
    private modelService :modelService,
    private colorService :colorService,
    ) {
      this.isMaking = true;
      this.isModel = true;
     }

  ngOnInit() {
    this.cars=this.carService.getAll();
    this.making=this.makingService.getAll();
    this.colors=this.colorService.getAll();
    this.display=true;
    
    // this.allModels=this.makingService.getByName('Ford');
    
    // console.log(this.allModels.map(a=>a.models[name]));
  }
  onChange(makingName: Event) {
    let selectElementValue = makingName.target['options']
    [makingName.target['options'].selectedIndex].value;
    let selectoption= selectElementValue as number;
    this.makingName = makingName.target['options']
    [makingName.target['options'].selectedIndex].text;
    // let selectoptionText= selectElementText as number;
    this.specificMakingName=this.carService.getByMakingName(this.makingName);
    this.models=this.modelService.getBymakingId(selectoption);
   this.modelss= this.models.map(a=>a.name);
   this.display=false;
       console.log(selectElementValue);
       console.log(this.models); 
       console.log(this.makingName)
       console.log(this.modelss);
       
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
colorFunction(colorName:Event){
  let selectColor = colorName.target['options']
    [colorName.target['options'].selectedIndex].text;
    let colored =selectColor as string;
    console.log(colored);
    this.specificColor=this.carService.getByColor(colored);
    this.display=false;
}

// changeHandler(data:string){
//  console.log(data);
// }
}
