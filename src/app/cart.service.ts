import { HttpClient } from '@angular/common/http';
import { OrderDetail } from './model/orderDetail';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './model/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItem = 'cart';
  private orderAPI = 'order/create';
  constructor(private http: HttpClient) { }

  addToCart(orderDetail) {
    let oldItem = false;
    let orderList = JSON.parse(localStorage.getItem(this.cartItem));
    if (!orderList) {
      orderList = new Array<OrderDetail>();
    }
    orderList.forEach(element => {
      if (element.gearId == orderDetail.gearId) {
        element.quantity += 1;
        oldItem = true;
        return false;
      }
    });
    if (!oldItem) orderList.push(orderDetail);

    localStorage.setItem(this.cartItem, JSON.stringify(orderList))



  }
  removeFromCart(id) {
    let orderList = JSON.parse(localStorage.getItem(this.cartItem));
    if (orderList) {
      for (let index = 0; index < orderList.length; index++) {
        if (orderList[index].gearId == id) {
          orderList.splice(index, 1);
          break;
        }
      }
      if(orderList.length ==0 ) this.clearCart();
      else localStorage.setItem(this.cartItem, JSON.stringify(orderList));
    }
  }
  getCart(): Array<OrderDetail> {
    let orderList = JSON.parse(localStorage.getItem(this.cartItem));
    if (orderList) {
      return orderList;
    }
    return null;
  }
  updateCart(cart) {
    localStorage.setItem(this.cartItem, JSON.stringify(cart));
  }
  submitCart() : Observable<string> {
    let orderList = JSON.parse(localStorage.getItem(this.cartItem));
    let account = JSON.parse(sessionStorage.getItem('account'));
    if (orderList && account) {
      let date = new Date();
      let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      let order: Order = {
        accountId: account.id,
        createdDate: today,
        isFinished: false,
        orderDetails: orderList
      }
      return this.http.post<string>(environment.apiEndPoint + this.orderAPI, order);
    }

  }
  clearCart() {
    localStorage.removeItem(this.cartItem);
  }
}
