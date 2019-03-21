import { LoaderService } from './../loader.service';
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
  loginForm;
  isSubmit = false;
  constructor(private api:AccountService, private router:Router,private loader:LoaderService) { }

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
    this.loader.show();
    let loginInfor = this.loginForm.value;
    this.api.login(loginInfor.username, loginInfor.password).subscribe(result => {
      if(result.toString() == 'N') {
        this.loader.hide();
        alert('Username or Password is wrong')
        return;
      }
      let account = result;    
      sessionStorage.setItem('account', JSON.stringify(account));
      if(account.isAdmin) {
        this.router.navigate(['admin/dashboard'])
      }
      this.loader.hide();
      this.router.navigate(['/']);
    });
  }

}
