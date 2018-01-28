import { Worker } from "../model/workers";

export class WorkersService {
    private workers = {
        "David": new Worker(1,"David","123","123"),
        "Hodaya": new Worker(2,"Hodaya","456","456"),
        "Dina": new Worker(3,"Dina","789","789")
    }
    
    checkIfWorkerExists(workerName:string,workerPass:string){
        let worker : Worker = this.workers[workerName];
        if(!worker){
            throw new Error('Worker not found');
        }
        if(worker.workerPassword!=workerPass){
            throw new Error('Password is wrong');
        }
        throw new Error('welocome!!');
    }

    checkmandatoy():boolean{
        //check if...
        return true;
    }
}