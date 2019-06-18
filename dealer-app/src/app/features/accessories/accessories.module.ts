import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { AccessoriesService } from './accessories.service';
import { CategoryService } from './category.service';


@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
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
