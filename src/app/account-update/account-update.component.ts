import { AccountService } from './../account.service';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  currentTab = 1;
  account:Account;
  newPassword;
  oldPassword;
  orderList;
  wrongOldPass = false;
  totalList = new Array();
  constructor(private accountSer:AccountService, private orderSer:OrderService) { }

  ngOnInit() {
    this.account = JSON.parse(sessionStorage.getItem('account'));
  }

  changeTab(num) {
    if(num == 1 || num == 2) {
      this.resetInfor();
    }
    if(num == 3) {
      this.orderPrepare();
    }
    this.currentTab = num;
  }
  resetInfor() {
    this.account = JSON.parse(sessionStorage.getItem('account'));
  }
  changeInfor() {
    if(JSON.stringify(this.account) != sessionStorage.getItem('account')){
      this.accountSer.changeInfor(this.account).subscribe(result => {
        this.account = result
        sessionStorage.setItem('account', JSON.stringify(this.account));
      }); 
      
    }
   
  } 
  changePassword() {
    if(this.oldPassword == this.account.password) {
      this.wrongOldPass = false;
      this.account.password = this.newPassword;
      this.accountSer.changePassword(this.account).subscribe(result =>{
        this.account = result;
        sessionStorage.setItem('account', JSON.stringify(this.account));
      })
    }else {
      this.wrongOldPass = true;
    }
  }
  cancel(id) {
    this.orderSer.deleteOrder(id).subscribe(() => {
      this.orderPrepare();
    })
  }
  orderPrepare() {
    this.orderSer.getOrderAccId(this.account.id).subscribe(result => {
      this.orderList = result;
      for (let i = 0; i < this.orderList.length; i++) {
        let total = 0;
        for (let j = 0; j < this.orderList[i].quantityList.length; j++) {
          total = (this.orderList[i].quantityList[j] * this.orderList[i].priceList[j]) + total;
        }
        this.totalList.push(total);
      }
    });
  }
}
