import { LoaderService } from './../loader.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderList;
  total = 0;
  constructor(private cartSer: CartService, private router:Router, private loader:LoaderService) { }

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
    this.updateView();
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
      let acc = sessionStorage.getItem('account');
      if(acc) {
        this.loader.show();
        this.cartSer.submitCart().subscribe(result => {
          this.cartSer.clearCart();
          alert('Your order is submited');
          this.loader.hide();
          this.router.navigate(['/']);
        });
      }else {
        this.router.navigate(['/login']);
      }
  }

}
