import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
//service
import { AccessoriesService } from './accessories.service';
import { CategoryService } from './category.service';


@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    DetailsComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'accessory', component: ListComponent },
      { path: 'accessory/add', component: AddComponent },
      { path: 'accessory/details/:id', component: DetailsComponent },
    ])
  ],
  exports: [
    ListComponent,
    DetailsComponent,
    AddComponent
  ],
  providers: [
    AccessoriesService,
    CategoryService
  ]
})
export class AccessoriesModule { }
