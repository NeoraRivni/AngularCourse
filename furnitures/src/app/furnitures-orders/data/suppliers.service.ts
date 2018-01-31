import { Supplier } from "../model/suppliers";
import { Furniture } from "../model/furnitures";

export class SupplierService {
    private suppliers = {
        "BeityLi": new Supplier(1,"BeityLi","123"),
        "Oren": new Supplier(2,"Oren","456"),
        "Ikea": new Supplier(3,"Ikea","789")
    }
    // מה הפונקציה מקבלת? שם או קוד?
    ListFurnitureBySupplier(supplierId:number): Furniture[]{
        let supplier : Supplier = this.suppliers[supplierId];
        // הבאת רשימת רהיטים עם קוד ספק זהה
        return ;
    }

    
}