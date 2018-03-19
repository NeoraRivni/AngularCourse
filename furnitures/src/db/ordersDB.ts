export class OrdersDB {
    constructor(readonly id:number, readonly orderDate: Date, 
        readonly workerId:number, readonly supplierId:number, 
        readonly orderStatus:boolean){}
}