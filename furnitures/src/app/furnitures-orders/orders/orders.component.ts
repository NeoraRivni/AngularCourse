import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderNViewModel } from '../order/orderN.view-model';
import { Order } from '../model/orders';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() private ordersList: OrderNViewModel[];
  @Input()  private hideButtons : boolean;
  // @Output() private passOrderItems: EventEmitter<Order> = new EventEmitter<Order>();
  
  // @Output() private hh : boolean=this.hideButtons;
  // @Output() private recordSelected: EventEmitter<OrderNViewModel> = new EventEmitter<OrderNViewModel>();
  

  constructor() { }

  ngOnInit() {
    debugger;
  }
  // selectOrder(selectOrder:OrderNViewModel) {
    
  //       this.recordSelected.emit(selectOrder);    
  //     }

}
