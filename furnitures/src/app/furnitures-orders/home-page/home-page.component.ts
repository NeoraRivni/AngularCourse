import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) {
     }
  idWorker: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.idWorker=+params.get('id');
      //this.router.navigate(['do-order',this.idWorker]);
    })
  }
    //  
}
