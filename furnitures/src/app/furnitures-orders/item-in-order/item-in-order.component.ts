import { Component, OnInit, Input } from '@angular/core';
import { OrderItems } from '../model/order_items';
import { FurnituresService } from '../data/furnitures.service';
import { Furniture } from '../model/furnitures';

@Component({
  selector: 'itemO',
  templateUrl: './item-in-order.component.html',
  styleUrls: ['./item-in-order.component.css']
})
export class ItemInOrderComponent implements OnInit {


@Input() private itemO: OrderItems;
private currentFurniture: Furniture;

  constructor(private furnituresService : FurnituresService) { 

  }

  ngOnInit() {
    this.furnituresService.getFurniture(this.itemO.furnitureId).then(result=>{
        this.currentFurniture=result;
      });
  }
}
