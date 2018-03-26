import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, ) {
     }
  public idWorker: number;

  //נקבל את הקוד של העובד מהמסך של הכניסה, כדי שנוכל להשתמש בו בעת ביצוע הזמנה
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.idWorker=+params.get('id'); });
  }
  //פונקציית התנתקות שתוביל למסך הכניסה
  LogOut() {
    this.router.navigate(['login']);
  }
    
}
