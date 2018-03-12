import { Order } from "../model/orders";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { OrderViewModel } from "../do-order/order.view-model";
import { FurnitureViewModel } from "../do-order/furniture.view-model";
import { OrderItems } from "../model/order_items";
import { OrderDB } from "../../../db/orderDB";
import { OrderNViewModel } from "../order/orderN.view-model";

@Injectable()
export class OrderService {
    SupplierService: any;
  
    baseUrl: string="http://localhost:3000";
    
        constructor(private httpClient:HttpClient){
    
        }

        
    
    async ListAllOrders():Promise< OrderNViewModel[]>{
        let ordersUrl = this.baseUrl+"/orders";
        let ordersFromDB = await this.httpClient.get<Order[]>(ordersUrl).toPromise();
        let vmOrdersREsult:OrderNViewModel[] = new Array<OrderNViewModel>();

        for(let item of ordersFromDB){
            let vmOrderN:OrderNViewModel = new OrderNViewModel();
            //vmOrderN.id= i
            vmOrderN.orderStatus=item.orderStatus;
            vmOrderN.supplierId=item.supplierId;
            vmOrderN.supplierName=this.SupplierService.getName(item.supplierId);
            vmOrderN.workerId=item.workerId;
            vmOrdersREsult.push(vmOrderN);
        }
        return vmOrdersREsult; 
        
   
    }

//איך לוקחים רק את ההזמנות שהסטטוס שלהם שקר
     async ListOrderIsNotProvided():Promise< Order[]>{
        let ordersUrl = this.baseUrl+"/orders?orderStatus="+false;
        let ordersFromDB = await this.httpClient.get<Order[]>(ordersUrl).toPromise();
        return ordersFromDB;
    }


    async OrderConfirmation(orderId: number) : Promise<void> {
        let ordersUrl = this.baseUrl+"/orders?orderId="+orderId;
        let ordersFromDB = await this.httpClient.get<Order[]>(ordersUrl).toPromise();
        if (ordersFromDB.length>0){
            let currentOrder = new Order(ordersFromDB[0].orderDate,
                ordersFromDB[0].workerId,ordersFromDB[0].supplierId,true);
                this.httpClient.post(ordersUrl, currentOrder).toPromise()
        }
    }

    async DeleteOrder(orderId: number) : Promise<void> {
        debugger;
        let ordersUrl1 = this.baseUrl+"/orders?orderId="+orderId;
        //let ordersFromDB1 = await this.httpClient.get<Order[]>(ordersUrl1).toPromise();
       // if (ordersFromDB1.length>0){
                this.httpClient.delete(ordersUrl1).toPromise();
        //}
        let ordersUrl2 = this.baseUrl+"/order_items/"+orderId;
        //let ordersFromDB2 = await this.httpClient.get<Order[]>(ordersUrl2).toPromise();
        this.httpClient.delete(ordersUrl2).toPromise();
    }
    
    async doOrder(currentOrderVM : OrderViewModel, currentFurnituresVM : FurnitureViewModel[]) : Promise<void>{
        debugger;
        let idOfOrder:number;//
        let ooo:Object;
        let currentOrder = new Order(new Date(), currentOrderVM.workerId, currentOrderVM.supplierId, false);
        
        await this.httpClient.post<Order>(this.baseUrl + '/orders', currentOrder).toPromise().then(result=>{
            ooo = result;
            });

        // let cd= await this.httpClient.get(this.baseUrl + '/orders?orderDate'+currentOrder.orderDate).toPromise();
        // idOfOrder=cd[0].id;
        let currentOrderItem : OrderItems;

        for (let item of currentFurnituresVM) {
            if(item.amount && item.amount>0){
            currentOrderItem = new OrderItems(1,item.id ,item.amount);
            await this.httpClient.post(this.baseUrl + '/order_items', currentOrderItem).toPromise();
            }
        }
        }

    
}