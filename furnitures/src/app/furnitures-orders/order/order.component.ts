import { Component, OnInit, Input } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';
import { SupplierService } from '../data/suppliers.service';
import { OrderNViewModel } from './orderN.view-model';
import { OrderService } from '../data/order.service';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() private order: OrderNViewModel;
  @Input()  private hideButtons : boolean;

  constructor(private suppliersService:SupplierService, private orderService:OrderService) { 
    }
 message:string;
  
 ngOnInit() {
  }

  OrderConfirmation(){
    this.orderService.OrderConfirmation(this.order.id).then(result=>{
      this.message="You'r order was ok successfully!";
  })
 }
 DeleteOrder(){
     this.orderService.DeleteOrder(this.order.id).then(result=>{
       this.message="You'r order was delete successfully!";
     })
 }

}
