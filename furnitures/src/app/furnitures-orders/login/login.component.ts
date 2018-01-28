import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../data/workers.service';
import { WorkerViewModel } from './worker.view-model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private workerService:WorkersService) { }

  private currentWorker:WorkerViewModel = new WorkerViewModel();
  ngOnInit() {
  }

  checkLogin(){
    this.workerService.checkIfWorkerExists(this.currentWorker.name,this.currentWorker.password);
  }

}
