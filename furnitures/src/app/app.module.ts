import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './furnitures-orders/login/login.component';
import { FurnituresOrderModule } from './furnitures-orders/furnitures-order.module';
import { WorkersService } from './furnitures-orders/data/workers.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FurnituresOrderModule
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
