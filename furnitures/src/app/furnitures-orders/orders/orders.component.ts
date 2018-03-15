import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderNViewModel } from '../order/orderN.view-model';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() private orders: OrderNViewModel[];
  @Input()  private hideButtons : boolean;
  // @Output() private hh : boolean=this.hideButtons;
  // @Output() private recordSelected: EventEmitter<OrderNViewModel> = new EventEmitter<OrderNViewModel>();
  

  constructor() { }

  ngOnInit() {
  }
  // selectOrder(selectOrder:OrderNViewModel) {
    
  //       this.recordSelected.emit(selectOrder);    
  //     }

}
