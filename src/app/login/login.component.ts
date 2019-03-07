import { Account } from './../model/account';

import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm;
  isSubmit = false;
  constructor(private api:AccountService, private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    });
  
  }
  
  get f() {return this.loginForm.controls}

  onSubmit() {
    this.isSubmit = true;
    if(this.loginForm.invalid) {
      return;
    }
    let loginInfor = this.loginForm.value;
    this.api.login(loginInfor.username, loginInfor.password).subscribe(result => {
       let account = {
         firstName: result.firstName,
         lastName: result.lastName,
         isAdmin: result.isAdmin
       }
      sessionStorage.setItem('account', JSON.stringify(account));
      if(account.isAdmin) {
        this.router.navigate(['admin/dashboard'])
      }
    });
  }

}
