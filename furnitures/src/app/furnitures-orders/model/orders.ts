export class Order {
    constructor(readonly id:number, readonly orderDate: Date, 
        readonly workerId:string, readonly supplierId:string, 
        readonly orderStatus:boolean){}
}
