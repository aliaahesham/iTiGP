import { Component, OnInit } from '@angular/core';
import { carService } from '../car.services';
import { car } from 'src/app/_models/car/car';

@Component({
  selector: 'app-cars',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   cars:car[];
  constructor(private carService:carService) { }

  ngOnInit() {
    this.cars=this.carService.getAll();
    console.log(this.cars);
  }

}
