import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../data/workers.service';
import { WorkerViewModel } from './worker.view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private workerService:WorkersService,private router:Router) { }

  private currentWorker:WorkerViewModel = new WorkerViewModel();
  private message:string;
  ngOnInit() {
  }

  checkLogin(){
    this.workerService.checkIfWorkerExists(this.currentWorker.name,this.currentWorker.password).then(result=>{
      if(result)
       if(result>0){
        this.router.navigate(['doOrder',result]);
      }else{
        this.message="Sorry, there is no such a worker in the sustem"
      }
    });
  }

}
