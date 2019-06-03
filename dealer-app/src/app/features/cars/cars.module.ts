import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ListComponent, AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'car', component: ListComponent },
      { path: 'car/add', component: AddComponent },
      { path: 'car/details', component: DetailsComponent },
    ])
  ]
})
export class CarsModule { }
