import { Component, OnInit, Input } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() private order: OrderViewModel;
  
  constructor() { }

  ngOnInit() {
  }

}
