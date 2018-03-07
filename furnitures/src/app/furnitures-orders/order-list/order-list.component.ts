import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';
import { OrderService } from '../data/order.service';
import { FurnitureViewModel } from '../do-order/furniture.view-model';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  @Input() private currentFurnitures:FurnitureViewModel[];
  
  @Output() private passOrderItems: EventEmitter<FurnitureViewModel[]> = new EventEmitter<FurnitureViewModel[]>();
      
  constructor(private orderService:OrderService) {}
  //private currentOrder: OrderViewModel;

  ngOnInit() {
  }

 performOrder(){
   debugger;
   this.passOrderItems.emit(this.currentFurnitures);
  //this.orderService.doOrder(this.currentFurnitures);
 }
}
