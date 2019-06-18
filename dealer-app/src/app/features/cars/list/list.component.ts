import { Component, OnInit } from '@angular/core';
import { carService } from '../car.services';
import { car } from 'src/app/_models/car/car';
import { capacity } from 'src/app/_models/car/capacity';
import {capacityService} from '../capacity.service';
import {cylinderService} from '../cylinder.service';
import {makingService} from '../making.service';
import {making} from 'src/app/_models/car/making';

@Component({
  selector: 'app-cars',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   cars:car[];
   capacity:capacity[];
   making:making[];
   

  constructor(
    private carService:carService,
    private capacityService:capacityService,

    ) { }

  ngOnInit() {
    this.cars=this.carService.getAll();
    console.log(this.cars);
  }

}
