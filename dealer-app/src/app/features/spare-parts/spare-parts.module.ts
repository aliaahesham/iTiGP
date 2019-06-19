import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent, AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'spareParts', component: ListComponent },
      { path: 'spareParts/add', component: AddComponent },
      { path: 'spareParts/details', component: DetailsComponent },
    ])
  ]
})
export class SparePartsModule { }
