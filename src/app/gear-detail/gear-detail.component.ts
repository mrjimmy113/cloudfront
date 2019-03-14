import { CartService } from './../cart.service';
import { OrderDetail } from './../model/orderDetail';
import { Gear } from './../model/gear';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gear-detail',
  templateUrl: './gear-detail.component.html',
  styleUrls: ['./gear-detail.component.css']
})
export class GearDetailComponent implements OnInit {
  @Input()inputs: Object
  private gear:Gear;
  constructor(private cartSer: CartService) { }

  ngOnInit() {
    this.gear =<Gear> this.inputs;
  }
  addToCart() {
    let order : OrderDetail = {
      gearId: this.gear.id,
      name: this.gear.name,
      quantity: 1,
      price: this.gear.price
    }
    console.log('CL');
    this.cartSer.addToCart(order);
    
  }

}
