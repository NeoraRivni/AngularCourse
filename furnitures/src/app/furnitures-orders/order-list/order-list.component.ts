import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() private order_list: OrderViewModel[];
  
  @Output() private recordSelected: EventEmitter<OrderViewModel> = new EventEmitter<OrderViewModel>();
      
  constructor() { }

  ngOnInit() {
  }

  selectOrder(selectOrder:OrderViewModel) {
    
        debugger;
  
        this.recordSelected.emit(selectOrder);    
      }
}
