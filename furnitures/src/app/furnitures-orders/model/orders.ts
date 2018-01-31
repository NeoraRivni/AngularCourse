export class Order {
    constructor(readonly orderId:number, readonly orderDate: Date, readonly workerId:string, readonly supplierId:string, readonly orderStatus:boolean){}
}
// לבדוק את הטיפוס של התאריך