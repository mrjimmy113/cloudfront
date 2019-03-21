import { LoaderService } from './../loader.service';
import { AccountService } from './../account.service';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

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
  confirmPassword;
  wrongOldPass = false;
  totalList;
  constructor(private accountSer:AccountService, private orderSer:OrderService, private loader:LoaderService, private router:Router) { }

  ngOnInit() {
    this.account = JSON.parse(sessionStorage.getItem('account'));
  }

  changeTab(num) {
    console.log(num);
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
    this.loader.show();
    if(JSON.stringify(this.account) != sessionStorage.getItem('account')){
      this.accountSer.changeInfor(this.account).subscribe(result => {
        this.account = result
        sessionStorage.setItem('account', JSON.stringify(this.account));
        this.loader.hide();
      }); 
      
    }
   
  } 
  changePassword() {
    if(this.oldPassword == this.account.password) {
      this.wrongOldPass = false;
      this.account.password = this.newPassword;
      this.loader.show();
      this.accountSer.changePassword(this.account).subscribe(result =>{
        this.account = result;
        sessionStorage.setItem('account', JSON.stringify(this.account));
        this.loader.hide();
        alert('Password has been updated');
      })
    }else {
      this.wrongOldPass = true;
    }
  }
  cancel(id) {
    if(confirm('Are you sure to cancel this order')) {
      this.orderSer.deleteOrder(id).subscribe(() => {
        this.orderPrepare();
      })
    }
  }
  orderPrepare() {
    this.loader.show();
    this.totalList = new Array();
    this.orderSer.getOrderAccId(this.account.id).subscribe(result => {
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
}
