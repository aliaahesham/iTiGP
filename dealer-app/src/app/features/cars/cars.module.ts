import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { carService } from './car.services';
import {cylinderService} from './cylinder.service';
import {transimissionService} from './transimission.service'
import { capacityService} from './capacity.service'


@NgModule({
  declarations: [ListComponent, AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'car', component: ListComponent },
      { path: 'car/add', component: AddComponent },
      { path: 'car/details', component: DetailsComponent },
    ])
  ],
  providers:[
    carService,
    cylinderService,
    transimissionService,
    capacityService
  ]
})
export class CarsModule { }
