import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule ,Router } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CoreModule } from '../../core/core.module';
import { DetailsComponent } from './details/details.component';
import { carService } from './car.services';
import {makingService} from './making.service';
import {modelService} from './model.service';
import {colorService} from './color.service'
import { TabsModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [ListComponent, AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild([
      { path: 'car', component: ListComponent },
      { path: 'car/add', component: AddComponent },
      { path: 'car/details/:id', component: DetailsComponent },
      { path: 'car/details', component: DetailsComponent },
    ])
  ],
  providers: [carService, makingService, modelService , colorService]
})
export class CarsModule { }
