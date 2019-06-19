import { Component, OnInit, OnDestroy } from '@angular/core';
// import {Ng2BootstrapModule } from '@angular/core'
import { TabsModule } from 'ngx-bootstrap';
import {carService} from '../car.services'
import { ActivatedRoute } from '@angular/router';
import { car } from 'src/app/_models/car/car';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit ,OnDestroy {

  constructor(private carService:carService, private activatedRoute:ActivatedRoute) { }
   id:number;
   car:car;
   subscription:Subscription;
  ngOnInit() {
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
