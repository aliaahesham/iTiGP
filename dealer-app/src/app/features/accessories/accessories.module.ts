import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from './accessories.component';
import { AccessoriesItemComponent } from './accessories-item/accessories-item.component';
import { AccessoriesDetailsComponent } from './accessories-details/accessories-details.component';
import { AddAccessoriesComponent } from './add-accessories/add-accessories.component';


@NgModule({
  declarations: [
    AccessoriesComponent,
    AccessoriesItemComponent,
    AccessoriesDetailsComponent,
    AddAccessoriesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccessoriesComponent,
    AccessoriesDetailsComponent,
    AddAccessoriesComponent
  ]
})
export class AccessoriesModule { }
