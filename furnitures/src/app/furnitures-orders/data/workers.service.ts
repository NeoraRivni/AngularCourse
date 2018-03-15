import { Worker } from "../model/workers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WorkersService {
    baseUrl: string="http://localhost:3000";

    constructor(private httpClient:HttpClient){
        
    }
    
    async checkIfWorkerExists(workerName:string,workerPass:string):Promise<number>{
        let workersUrl = this.baseUrl+"/workers?workerName="+workerName+"&workerPassword="+workerPass;
      debugger;
        let workerFromDB = await this.httpClient.get<Worker[]>(workersUrl).toPromise();
        debugger;
         if(workerFromDB.length>0){
            return workerFromDB[0].id;
        }
        else{
            return 0;
        }
    }
}