import { Worker } from "../model/workers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WorkersService {
    baseUrl: string="http://localhost:3000";

    constructor(private httpClient:HttpClient){
        
    }
    
    async checkIfWorkerExists(workerName:string,workerPass:string):Promise<string>{
        let workersUrl = this.baseUrl+"/workers?workerName="+workerName+"&workerPassword="+workerPass;
        let workerFromDB = await this.httpClient.get<Worker[]>(workersUrl).toPromise();
        if(workerFromDB.length>0){
            return "Welcome!";
        }
        else{
            return "Sorry, there is no such a worker in the sustem";
        }
    }
}