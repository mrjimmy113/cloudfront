import { AccountService } from './../account.service';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

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
  wrongOldPass = false;
  constructor(private accountSer:AccountService) { }

  ngOnInit() {
    this.account = JSON.parse(sessionStorage.getItem('account'));
  }

  changeTab(num) {
    if(num == 1 || num == 2) {
      this.resetInfor();
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
}
