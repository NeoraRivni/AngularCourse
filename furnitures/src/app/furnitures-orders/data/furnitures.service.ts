import { Furniture } from "../model/furnitures";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FurnituresService {
    baseUrl: string="http://localhost:3000";

    constructor(private httpClient:HttpClient){}

    async getFurnitureForSupplier(supplierId:number): Promise<Furniture[]>{
        debugger;
        let furnituresUrl = this.baseUrl+"/furnitures?supplierId="+supplierId;
        let furnituresFromDB = await this.httpClient.get<Furniture[]>(furnituresUrl).toPromise();
        return furnituresFromDB;
     }

}