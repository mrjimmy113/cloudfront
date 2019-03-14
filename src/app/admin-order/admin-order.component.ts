import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  orderList;
  totalList;
  constructor(private orderSer:OrderService, private loader:LoaderService) { }

  ngOnInit() {
    this.orderPrepare();
  }
  orderPrepare() {
    this.loader.show();
    this.totalList = new Array();
    this.orderSer.getALL().subscribe(result => {
      this.orderList = result;
      for (let i = 0; i < this.orderList.length; i++) {
        let total = 0;
        for (let j = 0; j < this.orderList[i].quantityList.length; j++) {
          total = (this.orderList[i].quantityList[j] * this.orderList[i].priceList[j]) + total;
        }
        this.totalList.push(total);
      }
      this.loader.hide();
    });
  }
  cancel(id) {
    if(confirm('Are you sure to cancel this order')) {
      this.loader.show();
      this.orderSer.deleteOrder(id).subscribe(() => {
        this.orderPrepare();
      })
    }
  }
  complete(id) {
    if(confirm('Are you sure to complete this order')) {
      this.loader.show();
      this.orderSer.complete(id).subscribe(() => {
        this.orderPrepare();
      })
    }
  }
}
