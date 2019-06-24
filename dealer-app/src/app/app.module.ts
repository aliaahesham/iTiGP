import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessoriesModule } from './features/accessories/accessories.module';
// <-- import the module
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { DiagnosticModule } from './features/diagnostics/diagnostic.module';
import { CarsModule } from './features/cars/cars.module';
import { SparePartsModule } from './features/spare-parts/spare-parts.module';
import { TutorialsModule } from './features/tutorials/tutorials.module';
import { CoreModule } from './core/core.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    DiagnosticModule,
    CarsModule,
    AccessoriesModule,
    TutorialsModule,
    SparePartsModule,
    SharedModule,
    CoreModule,
    RoutingModule,
    RouterModule,
    NgxPaginationModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
