import { Worker } from "../model/workers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WorkersService {
    baseUrl: string="http://localhost:3000";

    constructor(private httpClient:HttpClient){
        
    }
    //פונקציה המחזירה שם עובד לפי קוד
    async getName(numId: number):Promise<string>{
         let workersFromDB = await this.httpClient.get<Worker[]>(this.baseUrl+"/workers?id="+numId).toPromise();
         return workersFromDB[0].workerName;
    }
    //פונקציה הבודקת אם עובד קיים במערכת
    async checkIfWorkerExists(workerName:string,workerPass:string):Promise<number>{
        let workersUrl = this.baseUrl+"/workers?workerName="+workerName;
        let workerFromDB = await this.httpClient.get<Worker[]>(workersUrl).toPromise();
        if(!(workerFromDB.length>0)){
             return -1; }
        else{
            workersUrl = this.baseUrl+"/workers?workerName="+workerName+"&workerPassword="+workerPass;
            workerFromDB = await this.httpClient.get<Worker[]>(workersUrl).toPromise();
            if (workerFromDB.length>0)
           {return workerFromDB[0].id;}
           else
          { return 0;}
        }
    }
}