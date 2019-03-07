import { AccountService } from './../account.service';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-account-reg',
  templateUrl: './account-reg.component.html',
  styleUrls: ['./account-reg.component.css']
})
export class AccountRegComponent implements OnInit {
  account = new Account();
  confirmPassword;
  isAccountExisted = true;
  haveNotChecked = true;
  constructor(private accountSer:AccountService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.account.isAdmin = false;
    this.accountSer.create(this.account).subscribe(result => console.log(result));
  }
  checkUsername(username) {
    this.haveNotChecked = false;
    this.accountSer.checkUsername(username).subscribe(result => this.isAccountExisted = result);
  }
  checkUsernameAgain() {
      if(!this.haveNotChecked) {
        this.haveNotChecked = true;
      }
  }

}
