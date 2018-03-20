import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DoOrderComponent } from './do-order/do-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNotProvidComponent } from './order-not-provid/order-not-provid.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ItemInOrderComponent } from './item-in-order/item-in-order.component';
import { ItemsInOrderComponent } from './items-in-order/items-in-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [LoginComponent, DoOrderComponent, OrderListComponent, 
    OrderNotProvidComponent, OrderItemComponent, OrderComponent, OrdersComponent, HomePageComponent, AllOrdersComponent, ItemInOrderComponent, ItemsInOrderComponent],
  exports:[LoginComponent, DoOrderComponent,OrderItemComponent,OrderListComponent,OrderComponent,OrderNotProvidComponent]
})
export class FurnituresOrderModule { }
