import { Order } from "../model/orders";

export class OrderService {
    private orders = {
        "order1": new Order(1, (2018,10,01) ,1, 1, false),
        "order2": new Order(2,'02/01/2018' ,2, 1, false),
        "order3": new Order(3,'03/01/2018' ,3, 3, true)
    }
   
    ListAllOrders(): Order[]{
        
        return ;
    }

    ListOrderIsNotProvided(): Order[]{
        return ;
    }
    
   //העדכון נעשה פה?
    OrderConfirmation(orderId: number) {
        this.orders[orderId].orderStatus=true;
    }

    DeleteOrder(orderId: number) {
       
    }
    
    

    
}