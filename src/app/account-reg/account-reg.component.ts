import { Router } from '@angular/router';
import { LoaderService } from './../loader.service';
import { AccountService } from './../account.service';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { resource } from 'selenium-webdriver/http';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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
  constructor(private accountSer:AccountService, private loader:LoaderService,private route:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loader.show();
    this.account.isAdmin = false;
    this.accountSer.create(this.account).subscribe(result => {
      this.loader.hide();
      alert('Your account has been created');
      this.route.navigate(['login']);
    });
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
