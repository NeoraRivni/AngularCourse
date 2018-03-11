import { NgModule } from "@angular/core";
import { Route, RouterModule, Router,Routes } from "@angular/router";
import { LoginComponent } from "./furnitures-orders/login/login.component";
import { DoOrderComponent } from "./furnitures-orders/do-order/do-order.component";
const route:Routes=[
    
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'doOrder/:id', component: DoOrderComponent},
    // {path: 'homePage', component: HomePageComponent, children: [
    //     {path: 'bookManagment', component: BookManagmentComponent},
    //     {path: 'internalBookManagment/:id', component: InternalBookMangmentComponent},
    //     {path: 'bookStatus', component: BookStatusComponent},
    //     {path: 'lendings', component: LendingsComponent},
    //     {path: 'returnings', component: ReturningsComponent},
    //     {path: 'readersManagment', component: RedearsManagmentComponent}
    // ]},
 ];

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class AppRoutingModule{}