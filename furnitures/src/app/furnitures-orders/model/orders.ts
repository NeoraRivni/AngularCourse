export class Order {
    constructor(readonly id:number, readonly orderDate: Date, 
        readonly workerId:number, readonly supplierId:number, 
         orderStatus:boolean){}
}
