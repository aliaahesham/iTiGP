import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryService } from './category.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ListComponent, AddComponent, DetailsComponent, ItemComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'spareParts', children: [
          { path: '', component: ListComponent },
          { path: 'add', component: AddComponent },
          { path: 'details/:id', component: DetailsComponent },
        ]
      },

    ])
  ],
  providers: [
    CategoryService,
  ]
})
export class SparePartsModule { }
