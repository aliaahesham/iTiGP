import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessoriesModule } from './features/accessories/accessories.module';
import {TutoriesModule} from './features/tutorials/tutories.module';



import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { DiagnosticModule } from './features/diagnostics/diagnostic.module';
import { CarsModule } from './features/cars/cars.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DiagnosticModule,
    CarsModule,
    AccessoriesModule,
    TutoriesModule,
    SharedModule,
    RoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
