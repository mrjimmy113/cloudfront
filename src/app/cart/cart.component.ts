import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private orderList;
  private total = 0;
  constructor(private cartSer: CartService) { }

  ngOnInit() {
    let tmp = this.cartSer.getCart();
    if(tmp) {
      this.orderList = tmp;
      this.orderList.forEach(element => {
        this.total += (element.price * element.quantity);
      });
    }
  }
  down(order) {
    order.quantity -= 1;
    this.updateView();
  }
  up(order) {
    order.quantity += 1;
    this.updateView();
  }
  removeItem(order) {
    this.cartSer.removeFromCart(order);
    this.orderList = this.cartSer.getCart();
  }
  updateView() {
    this.total = 0;
    this.cartSer.updateCart(this.orderList);
    this.orderList = this.cartSer.getCart();
    this.orderList.forEach(element => {
      this.total += (element.price * element.quantity);
    });
  }

  submitOrder() {
    this.cartSer.submitCart().subscribe(result => this.cartSer.clearCart());
  }

}