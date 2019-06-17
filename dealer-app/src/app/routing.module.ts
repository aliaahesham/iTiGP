import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './core/home/homepage/homepage.component';

import { AccessoriesService } from './features/accessories/accessories.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      // {path:'**', component:NotFoundPAgeComponent },

    ])
  ],
  exports: [],
  providers: [
    AccessoriesService
  ]
})
export class RoutingModule { }
