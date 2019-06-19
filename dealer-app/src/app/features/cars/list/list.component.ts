import { Component, OnInit,Input } from '@angular/core';
import { carService } from '../car.services';
import {makingService} from '../making.service';
import {modelService} from '../model.service';
import { car } from 'src/app/_models/car/car';
import { capacity } from 'src/app/_models/car/capacity';
import {capacityService} from '../capacity.service';
import {cylinderService} from '../cylinder.service';
import {making} from 'src/app/_models/car/making';
import {model} from 'src/app/_models/car/model'

@Component({
  selector: 'app-cars',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cars:car[];
  //  capacity:capacity[];
  @Input() making:making[];
  @Input() models:model[];
  @Input() allModels:model[];
   
   

  constructor(
    private carService:carService,
    private makingService:makingService,
    private modelService :modelService,
    // private capacityService:capacityService,

    ) { }

  ngOnInit() {
    this.cars=this.carService.getAll();
    this.making=this.makingService.getAll();
    this.models=this.modelService.getAll();
    console.log(this.cars);
  }

}
