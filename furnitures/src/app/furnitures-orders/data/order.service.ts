import { Order } from "../model/orders";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { OrderViewModel } from "../do-order/order.view-model";
import { FurnitureViewModel } from "../do-order/furniture.view-model";
import { OrderItems } from "../model/order_items";

@Injectable()
export class OrderService {
  
    baseUrl: string="http://localhost:3000";
    
        constructor(private httpClient:HttpClient){
    
        }

        
    
    async ListAllOrders():Promise< Order[]>{
        let ordersUrl = this.baseUrl+"/orders";
        let ordersFromDB = await this.httpClient.get<Order[]>(ordersUrl).toPromise();
        return ordersFromDB;
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
            let currentOrder = new Order(ordersFromDB[0].id,ordersFromDB[0].orderDate,
                ordersFromDB[0].workerId,ordersFromDB[0].supplierId,true);
                this.httpClient.post(ordersUrl, currentOrder).toPromise()
        }
    }

    async DeleteOrder(orderId: number) : Promise<void> {
        let ordersUrl1 = this.baseUrl+"/orders?orderId="+orderId;
        //let ordersFromDB1 = await this.httpClient.get<Order[]>(ordersUrl1).toPromise();
       // if (ordersFromDB1.length>0){
                this.httpClient.delete(ordersUrl1).toPromise();
        //}
        let ordersUrl2 = this.baseUrl+"/order_items?orderId="+orderId;
        //let ordersFromDB2 = await this.httpClient.get<Order[]>(ordersUrl2).toPromise();
        this.httpClient.delete(ordersUrl2).toPromise();
    }
    
    async doOrder(currentOrderVM : OrderViewModel, currentFurnituresVM : FurnitureViewModel[]) : Promise<void>{
        let currentOrder = new Order(currentOrderVM.id, new Date(), currentOrderVM.workerId, currentOrderVM.supplierId, false);
        await this.httpClient.post(this.baseUrl + '/orders', currentOrder).toPromise();
        
        let currentOrderItem : OrderItems;
        for (let i = 0; i < currentFurnituresVM.length; i++) {
            currentOrderItem = new OrderItems(currentOrderVM.id,currentFurnituresVM[i].id,currentFurnituresVM[i].amount);
            await this.httpClient.post(this.baseUrl + '/order_items', currentOrderItem).toPromise();
            }
        }

    
}