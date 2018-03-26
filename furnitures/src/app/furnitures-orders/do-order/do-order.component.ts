import { Component, OnInit } from '@angular/core';
import { OrderViewModel } from './order.view-model';
import { SupplierService } from '../data/suppliers.service';
import { OrderService } from '../data/order.service';
import { Supplier } from '../model/suppliers';
import { FurnituresService } from '../data/furnitures.service';
import { Furniture } from '../model/furnitures';
import { FurnitureViewModel } from './furniture.view-model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'do-order',
  templateUrl: './do-order.component.html',
  styleUrls: ['./do-order.component.css']
})
export class DoOrderComponent implements OnInit {

  private currentOrder:OrderViewModel = new OrderViewModel();
  private suppliers:Supplier[] = new Array<Supplier>();
  private furnitures:FurnitureViewModel[] = new Array<FurnitureViewModel>();
  private message:string;
  private hideList:boolean = true;

  constructor(private suppliersService:SupplierService,private furnituresService:FurnituresService,
    private orderService:OrderService,private route:ActivatedRoute ,private router:Router, 
  private homePage: HomePageComponent) { }

  ngOnInit() {
    this.suppliersService.getAllSuppliers().then(result=>{
    this.suppliers = result;
    });

    this.currentOrder.workerId=this.homePage.idWorker;
  }
  //הבאת רשימת הרהיטים לפי ספק- נפעיל את הפונקציה המתאימה מהסרוויס
  searchForFurnitures() {
    this.message="";
    this.furnituresService.getFurnitureForSupplier(this.currentOrder.supplierId).then(result=>{
      this.furnitures=result;
      
      if(result.length>0)
      {this.hideList=false;}
      else{
        this.message="select supplier";
      }
      
    });
  }
  //ביצוע הזמנה- נפעיל את הפונקציה המתאימה מהסרוויס
  doOrder(orderItemsLIst:FurnitureViewModel[]){
    debugger;
      this.orderService.doOrder(this.currentOrder,orderItemsLIst).then(result=>{
      this.hideList=true;
      if (result)
      this.message="You'r order was preformed successfully!";
      });
}

}
