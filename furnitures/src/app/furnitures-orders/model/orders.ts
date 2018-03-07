export class Order {
    constructor( readonly orderDate: Date, 
        readonly workerId:number, readonly supplierId:number, 
        readonly orderStatus:boolean){}
}
