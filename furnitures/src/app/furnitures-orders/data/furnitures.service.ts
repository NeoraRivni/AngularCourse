import { Furniture } from "../model/furnitures";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FurnitureViewModel } from "../do-order/furniture.view-model";
import { NullAstVisitor } from "@angular/compiler";
import { promise } from "selenium-webdriver";

@Injectable()
export class FurnituresService {
    baseUrl: string="http://localhost:3000";

    constructor(private httpClient:HttpClient){}
    //פונקציה המחזירה רהיט לפי קוד
    async getFurniture(id:number):Promise<Furniture>{
        let furnituresUrl = this.baseUrl+"/furnitures?id="+id;
        let furnituresFromDB = await this.httpClient.get<Furniture[]>(furnituresUrl).toPromise();
        return furnituresFromDB[0];
    }
    //פונקציה המחזירה רשימת רהיטים לפי ספק
    async getFurnitureForSupplier(supplierId:number): Promise<FurnitureViewModel[]>{
        let furnituresUrl = this.baseUrl+"/furnitures?supplierId="+supplierId;
        let furnituresFromDB = await this.httpClient.get<Furniture[]>(furnituresUrl).toPromise();
        let result: FurnitureViewModel[] = new Array <FurnitureViewModel>();
        for (let f of furnituresFromDB)
        {
            let furnitureVM:FurnitureViewModel = new FurnitureViewModel();
            furnitureVM.id = f.id;
            furnitureVM.furnitureName = f.furnitureName;
            furnitureVM.furnitureColor = f.furnitureColor;
            furnitureVM.furnitureMaterial = f.furnitureMaterial;
            furnitureVM.furniturePrise = f.furniturePrise;
            furnitureVM.furnitureSize = f.furnitureSize;

            result.push(furnitureVM);
        }
        return result;
     }
    

}