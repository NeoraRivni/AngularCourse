import { Component, OnInit } from '@angular/core';
import { OrderNViewModel } from '../order/orderN.view-model';
import { OrderService } from '../data/order.service';

@Component({
  selector: 'all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {


  private ordersList:OrderNViewModel[] = new Array<OrderNViewModel>();
  private hiddenButton=true;
    constructor( private orderService: OrderService) {  
    }
    ngOnInit() {
      debugger;
     this.orderService.ListAllOrders().then(result=>{
        this.ordersList = result;
        debugger;
        });
    }
    
  }