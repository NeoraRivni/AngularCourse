import { Supplier } from "../model/suppliers";
import { Furniture } from "../model/furnitures";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
 
@Injectable()
export class SupplierService {

    baseUrl: string="http://localhost:3000";

    constructor(private httpClient:HttpClient){

    }

    // מה הפונקציה מקבלת? שם או קוד?
    

    async getAllSuppliers():Promise<Supplier[]>{
        let suppliersUrl = this.baseUrl+"/suppliers";
        let suppliersFromDB = await this.httpClient.get<Supplier[]>(suppliersUrl).toPromise();
        return suppliersFromDB;
    }

    
}