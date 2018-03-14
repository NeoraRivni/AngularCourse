import { NgModule } from "@angular/core";
import { Route, RouterModule, Router,Routes } from "@angular/router";
import { LoginComponent } from "./furnitures-orders/login/login.component";
import { DoOrderComponent } from "./furnitures-orders/do-order/do-order.component";
import { HomePageComponent } from "./furnitures-orders/home-page/home-page.component";
import { OrderNotProvidComponent } from "./furnitures-orders/order-not-provid/order-not-provid.component";
const routes:Routes=[
    
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
   // {path: 'doOrder/:id', component: DoOrderComponent},
    {path: 'home-page/:id', component: HomePageComponent, children: [
         {path: 'do-order/:id', component: DoOrderComponent},
         {path: 'order-not-provid', component: OrderNotProvidComponent}
    //     {path: 'bookStatus', component: BookStatusComponent},
    //     {path: 'lendings', component: LendingsComponent},
    //     {path: 'returnings', component: ReturningsComponent},
    //     {path: 'readersManagment', component: RedearsManagmentComponent}
     ]},
 ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}