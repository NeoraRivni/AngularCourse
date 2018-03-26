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

  
 
  private itemsInOrder: OrderItems[];
  private hiden=true;
  private hiden1=false;

  constructor(private suppliersService:SupplierService, private orderService:OrderService) { 
    }

 private hideOrder= false;
 
 ngOnInit() {
  
   
  }
  //אישור הזמנה- הפעלת הפונקציה המתאימה מהסרוויס
  OrderConfirmation(){
    this.hideOrder=true;
    this.orderService.OrderConfirmation(this.order.id);
 }
 //מחיקת הזמנה- הפעלת הפונקציה המתאימה מהסרוויס
 DeleteOrder(){
  this.hideOrder=true;
     this.orderService.DeleteOrder(this.order.id);
 }
 //הצגת הפריטים בהזמנה- הפעלת הפונקציה המתאימה מהסרוויס
 getAllItemsOrder(){
   this.orderService.getAllItemsOrder(this.order.id).then(result=>{
    this.itemsInOrder=result;
    this.hiden=false;
    this.hiden1=true;
  });
 }
 //לחיצה על הכפתור של סגירת הפרטים משנה את תצוגת הכתפורים בהתאם
 closeDetails(){

   this.hiden=true;
   this.hiden1=false;
 }

}
