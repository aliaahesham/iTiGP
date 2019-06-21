import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ServicesComponent } from './home/services/services.component';
import { CarsSampleComponent } from './home/cars-sample/cars-sample.component';
import { TutorialsComponent } from './home/tutorials/tutorials.component';
import { DiagnosticesComponent } from './home/diagnostices/diagnostices.component';
import { PartnersComponent } from './home/partners/partners.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { RouterModule ,Router } from '@angular/router';
import {DetailsComponent} from '../features/cars/details/details.component';

import {carService} from '../features/cars/car.services'


@NgModule({
  declarations: [
    FooterComponent,
    AboutUsComponent,
    HomepageComponent,
    ServicesComponent,
    CarsSampleComponent,
    TutorialsComponent,
    DiagnosticesComponent,
    PartnersComponent,
    HeaderComponent,
    TitleComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'car/details/:id', component: DetailsComponent },
     
    ])
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent
  ],
  providers:[carService]
   
})
export class CoreModule { }
 