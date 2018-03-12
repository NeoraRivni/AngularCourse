import { Component, OnInit, Input } from '@angular/core';
import { OrderViewModel } from '../do-order/order.view-model';
import { SupplierService } from '../data/suppliers.service';
import { OrderNViewModel } from './orderN.view-model';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() private order: OrderNViewModel;
   private Sname : string;
  constructor(private suppliersService:SupplierService) { 
    }
 
//  getName()
//  {
//     let Sname=this.suppliersService.getName(this.order.supplierId);
//     return Sname;
//  }
  ngOnInit() {
  }

}
