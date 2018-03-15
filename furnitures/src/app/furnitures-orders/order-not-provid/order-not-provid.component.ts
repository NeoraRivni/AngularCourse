import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderViewModel } from '../do-order/order.view-model';
import { OrderService } from '../data/order.service';
import { Order } from '../model/orders';
import { OrderNViewModel } from '../order/orderN.view-model';

@Component({
  selector: 'order-not-provid',
  templateUrl: './order-not-provid.component.html',
  styleUrls: ['./order-not-provid.component.css']
})

export class OrderNotProvidComponent implements OnInit {  
// @Input()  private hideButtons : boolean;
private ordersList  : OrderNViewModel[];

  constructor( private orderService: OrderService) {  
  
    
  }
  ngOnInit() {
    debugger;
   this.orderService.ListOrderIsNotProvided().then(result=>{
      this.ordersList = result;
      });
  
  }
  
}
