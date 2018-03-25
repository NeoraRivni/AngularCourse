import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';
import { SupplierService } from '../data/suppliers.service';
import { OrderNViewModel } from './orderN.view-model';
import { OrderService } from '../data/order.service';
import { OrderItems } from '../model/order_items';
import { Order } from '../model/orders';
import { Router } from '@angular/router';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  OrderNotProvidComponent: any;
  @Input() private order: OrderNViewModel;
  @Input()  private hideButtons : boolean;
  // @Output() private passOrderItems: EventEmitter<Order> = new EventEmitter<Order>();
  
  private itemsInOrder: OrderItems[];
  private hiden=true;
  private hiden1=false;

  //  created_at=this.order.orderDate;
  

  constructor(private suppliersService:SupplierService, private orderService:OrderService) { 
    }
 message:string;
 
 ngOnInit() {
   debugger;
  }

  OrderConfirmation(){
    this.message="";
    this.orderService.OrderConfirmation(this.order.id).then(result=>{
      this.message="You'r order was ok successfully!";
  });
  // this.router.navigate(['order-not-provid']);
  // this.passOrderItems.emit(this.order);

 }
 DeleteOrder(){
  this.message="";
     this.orderService.DeleteOrder(this.order.id).then(result=>{
      //  this.passOrderItems.emit();
        this.message="You'r order was delete successfully!";
     });
    //  this.passOrderItems.emit(this.order);
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
