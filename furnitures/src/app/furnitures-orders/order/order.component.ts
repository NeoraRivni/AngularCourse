import { Component, OnInit, Input } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';
import { SupplierService } from '../data/suppliers.service';
import { OrderNViewModel } from './orderN.view-model';
import { OrderService } from '../data/order.service';
import { OrderItems } from '../model/order_items';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() private order: OrderNViewModel;
  @Input()  private hideButtons : boolean;
  private itemsInOrder: OrderItems[];
  private hiden=true;
  private hiden1=false;


  constructor(private suppliersService:SupplierService, private orderService:OrderService) { 
    }
 message:string;
  
 ngOnInit() {
   debugger;
  }

  OrderConfirmation(){
    this.orderService.OrderConfirmation(this.order.id).then(result=>{
      this.message="You'r order was ok successfully!";
  });

 }
 DeleteOrder(){
     this.orderService.DeleteOrder(this.order.id).then(result=>{
       this.message="You'r order was delete successfully!";
     });
    //  this.orderService.ListOrderIsNotProvided();

 }
 getAllItemsOrder(){
   this.orderService.getAllItemsOrder(this.order.id).then(result=>{
    this.itemsInOrder=result;
    this.hiden=false;
    this.hiden1=true;
  });
 }
 closeDetails(){
   this.hiden=true;
   this.hiden1=false;
 }

}
