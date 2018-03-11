import { Component, OnInit, Input } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';
import { SupplierService } from '../data/suppliers.service';


@Component({
  selector: 'item',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() private item: OrderViewModel;
   private Sname : string;
  constructor(private suppliersService:SupplierService) { 
    }
 
 getName()
 {
    let Sname=this.suppliersService.getName(this.item.supplierId);
    return Sname;
 }
  ngOnInit() {
  }

}
