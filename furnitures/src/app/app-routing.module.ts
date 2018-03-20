import { NgModule } from "@angular/core";
import { Route, RouterModule, Router,Routes } from "@angular/router";
import { LoginComponent } from "./furnitures-orders/login/login.component";
import { DoOrderComponent } from "./furnitures-orders/do-order/do-order.component";
import { HomePageComponent } from "./furnitures-orders/home-page/home-page.component";
import { OrderNotProvidComponent } from "./furnitures-orders/order-not-provid/order-not-provid.component";
import { AllOrdersComponent } from "./furnitures-orders/all-orders/all-orders.component";
import { AppComponent } from "./app.component";
const routes:Routes=[
    
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
   // {path: 'doOrder/:id', component: DoOrderComponent},
    {path: 'home-page/:id', component: HomePageComponent, children: [
         {path: 'do-order', component: DoOrderComponent},
         {path: 'order-not-provid', component: OrderNotProvidComponent},
         {path: 'all-orders', component: AllOrdersComponent}
         
     ]}
 ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}