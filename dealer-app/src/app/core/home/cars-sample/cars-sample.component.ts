import { Component, OnInit, Input } from '@angular/core';
import {carService} from '../../../features/cars/car.services';
import {car} from '../../../_models/car/car';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cars-sample',
  templateUrl: './cars-sample.component.html',
  styleUrls: ['./cars-sample.component.scss']
})
export class CarsSampleComponent implements OnInit {
@Input() cars:car[];
car:car;
id:number;
subscription:Subscription;
  constructor(private carService:carService , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cars=this.carService.getAll();
    this.subscription = this.activatedRoute.params.subscribe(
      (params)=>{
        this.id= +params.id;
        this.car=this.carService.getById(this.id);
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
