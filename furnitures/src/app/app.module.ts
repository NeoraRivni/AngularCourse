import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './furnitures-orders/login/login.component';
import { FurnituresOrderModule } from './furnitures-orders/furnitures-order.module';
import { WorkersService } from './furnitures-orders/data/workers.service';
import { HttpClientModule } from '@angular/common/http';
import { SupplierService } from './furnitures-orders/data/suppliers.service';
import { OrderService } from './furnitures-orders/data/order.service';
import { DoOrderComponent } from './furnitures-orders/do-order/do-order.component';
import { FurnituresService } from './furnitures-orders/data/furnitures.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OrderNotProvidComponent } from './furnitures-orders/order-not-provid/order-not-provid.component';
import { HomePageComponent } from './furnitures-orders/home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FurnituresOrderModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WorkersService,SupplierService,OrderService,FurnituresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
