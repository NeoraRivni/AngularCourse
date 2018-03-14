import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderNViewModel } from '../order/orderN.view-model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() private orders: OrderNViewModel[];
  
  @Output() private recordSelected: EventEmitter<OrderNViewModel> = new EventEmitter<OrderNViewModel>();
  

  constructor() { }

  ngOnInit() {
  }
  selectOrder(selectOrder:OrderNViewModel) {
    
        this.recordSelected.emit(selectOrder);    
      }

}
