import { Order } from "../model/orders";

export class OrderService {
  
   
    ListAllOrders(): Order[]{
        
        return ;
    }

    ListOrderIsNotProvided(): Order[]{
        return ;
    }
    
   //העדכון נעשה פה?
    OrderConfirmation(orderId: number) {
       // this.orders[orderId].orderStatus=true;
    }

    DeleteOrder(orderId: number) {
       
    }
    
    

    
}