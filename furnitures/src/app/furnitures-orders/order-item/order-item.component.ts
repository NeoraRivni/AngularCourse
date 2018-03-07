import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FurnitureViewModel } from '../do-order/furniture.view-model';

@Component({
  selector: 'item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
@Input() private item:FurnitureViewModel;
  constructor() { }

  ngOnInit() {
  }

}
