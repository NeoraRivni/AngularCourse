import { Worker } from "../model/workers";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { OrderViewModel } from "../do-order/order.view-model";
import { FurnitureViewModel } from "../do-order/furniture.view-model";
import { OrderItems } from "../model/order_items";
import { OrderNViewModel } from "../order/orderN.view-model";
import { Order } from "../model/orders";
import { Furniture } from "../model/furnitures";
import { OrdersDB } from "../../../db/ordersDB";
import { SupplierService } from "./suppliers.service";
import { WorkersService } from "./workers.service";
import { promise } from "selenium-webdriver";


@Injectable()
export class OrderService {
  //  SupplierService: any;
  
    baseUrl: string="http://localhost:3000";
    
    
        constructor(private httpClient:HttpClient, private suppliersService:SupplierService, private workersService: WorkersService){
        }
    //פונקציה המחזירה רשימת פריטים בהזמנה לפי קוד ההזמנה
    async getAllItemsOrder(id:Number):Promise<OrderItems[]>{
        let ordersUrl = this.baseUrl+"/order_items?orderId="+id;
        let ordersFromDB = await this.httpClient.get<OrderItems[]>(ordersUrl).toPromise();
        return ordersFromDB;
    }

    //פונקציה המחזירה את רשימת כל ההזמנות
    async  ListAllOrders():Promise< OrderNViewModel[]>{
        let ordersUrl = this.baseUrl+"/orders";
        let ordersFromDB = await this.httpClient.get<OrdersDB[]>(ordersUrl).toPromise();
        let vmOrdersREsult:OrderNViewModel[] = new Array<OrderNViewModel>();

        for(let item of ordersFromDB){
            debugger;
            
                let vmOrderN:OrderNViewModel = new OrderNViewModel();
            vmOrderN.id=item.id;
            vmOrderN.orderStatus=item.orderStatus;
            vmOrderN.supplierId=item.supplierId;
           this.suppliersService.getName(item.supplierId).then(result=>{
            vmOrderN.supplierName = result;
           });
           this.workersService.getName(item.workerId).then(result=>{
            vmOrderN.workerName = result;
           });
            vmOrderN.workerId=item.workerId;
            vmOrderN.orderDate=item.orderDate;            
            vmOrdersREsult.push(vmOrderN);
    }
        return vmOrdersREsult; 
    }

    //פונקציה המחזירה את רשימת ההזמנות שלא סופקו
     async ListOrderIsNotProvided():Promise<OrderNViewModel[]>{
         debugger;
         
         let furnituresUrl = this.baseUrl+"/orders?orderStatus="+false;
         let ordersFromDB = await this.httpClient.get<OrdersDB[]>(furnituresUrl).toPromise();
         let vmOrdersREsult:OrderNViewModel[] = new Array<OrderNViewModel>();
       
        if(ordersFromDB.length>0)
        { 
            debugger;
         for(let item of ordersFromDB){
            let vmOrderN:OrderNViewModel = new OrderNViewModel();
            vmOrderN.id=item.id;
            vmOrderN.orderStatus=item.orderStatus;
            vmOrderN.supplierId=item.supplierId;
            this.suppliersService.getName(item.supplierId).then(result=>{
                vmOrderN.supplierName = result;
               });
            this.workersService.getName(item.workerId).then(result=>{
                vmOrderN.workerName = result;
               });
            vmOrderN.workerId=item.workerId;
            vmOrderN.orderDate=item.orderDate;
            debugger;
            vmOrdersREsult.push(vmOrderN);
        }
    }
        return vmOrdersREsult; 
    }

    //פונקציה המאשרת קבלת הזמנה
    async OrderConfirmation(orderId: number) : Promise<void> {
        let ordersUrl = this.baseUrl+"/orders?id="+orderId;
        let ordersFromDB = await this.httpClient.get<OrdersDB[]>(ordersUrl).toPromise();
        if (ordersFromDB.length>0){
            
            let currentOrder = new OrdersDB(orderId, ordersFromDB[0].orderDate,
                ordersFromDB[0].workerId,ordersFromDB[0].supplierId,true);
                   await this.httpClient.put(this.baseUrl+'/orders/'+orderId,currentOrder).toPromise();
             }
    }
    //פונקציה המוחקת הזמנה
    async DeleteOrder(orderId: number) : Promise<void> {
        let ordersUrl1 = this.baseUrl+"/orders/"+orderId;
             await   this.httpClient.delete(ordersUrl1).toPromise();
        let ordersUrl2 = this.baseUrl+"/order_items?orderId="+orderId;
        this.httpClient.delete(ordersUrl2).toPromise();
    }
    //פונקציה המבצעת הזמנה רק בתנאי שהוכנסו כמויות תקינות
    async doOrder(currentOrderVM : OrderViewModel, currentFurnituresVM : FurnitureViewModel[]) : Promise<number>{
        let currentPrice=0;
        let newOrder:Order;
        let flag: boolean;
        flag=false;
        for (let item of currentFurnituresVM) 
           if(item.amount>0)
           {
           currentPrice=item.amount*item.furniturePrise+currentPrice;
            flag=true;
           }
          if(flag)
              {
                let currentOrder = new Order(new Date(), currentOrderVM.workerId, currentOrderVM.supplierId, false);
                 newOrder =  await this.httpClient.post<Order>(this.baseUrl + '/orders', currentOrder).toPromise();
                 let currentOrderItem : OrderItems;
                  for (let item of currentFurnituresVM) {
                     if(item.amount>0){
                        currentOrderItem = new OrderItems(newOrder.id,item.id ,item.amount);
                          await this.httpClient.post<OrderItems>(this.baseUrl+'/order_items',currentOrderItem).toPromise();
                           }
                    }
                      return currentPrice;
               }
            //    else{
            //        return false;
            //    }
        }
        

    
}