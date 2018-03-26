import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderViewModel } from '../do-order/order.view-model';
import { OrderService } from '../data/order.service';
import { Order } from '../model/orders';
import { OrderNViewModel } from '../order/orderN.view-model';
import { Output } from '@angular/core/src/metadata/directives';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'order-not-provid',
  templateUrl: './order-not-provid.component.html',
  styleUrls: ['./order-not-provid.component.css']
})

export class OrderNotProvidComponent implements OnInit {  

private ordersList:OrderNViewModel[] = new Array<OrderNViewModel>();


  constructor( private orderService: OrderService) {  
  
    
  }
  ngOnInit() {
   this.orderService.ListOrderIsNotProvided().then(result=>{
      this.ordersList = result;
      });
  }
  
  
}
