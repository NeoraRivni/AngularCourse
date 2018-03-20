import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OrderItems } from '../model/order_items';

@Component({
  selector: 'items-in-order',
  templateUrl: './items-in-order.component.html',
  styleUrls: ['./items-in-order.component.css']
})
export class ItemsInOrderComponent implements OnInit {

@Input() private itemsO : OrderItems[];
  constructor() { }

  ngOnInit() {
  }

}
