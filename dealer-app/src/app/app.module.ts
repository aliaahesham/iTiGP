import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessoriesModule } from './features/accessories/accessories.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    SharedModule,
    AccessoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
