import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../data/workers.service';
import { WorkerViewModel } from './worker.view-model';
import { Router } from '@angular/router';
// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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
    if (!this.currentWorker.name && !this.currentWorker.password)
    this.message="Enter a user name and password";
    else if (!this.currentWorker.name)
    this.message="Enter a user name";
    else if (!this.currentWorker.password)
    this.message="Enter a password";
    else{
    this.workerService.checkIfWorkerExists(this.currentWorker.name,this.currentWorker.password).then(result=>{
      // if(result)
      // {
      if(result>0)
        this.router.navigate(['home-page',result]);
      else {
        if (result==-1)
      this.message="Sorry, The name does not exist in the system!";
      else 
      this.message="Incorrect password";
      }

      // }
    });
  }
  }
  
  

}
