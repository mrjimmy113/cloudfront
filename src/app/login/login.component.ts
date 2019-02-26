
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private api:AccountService) { }

  ngOnInit() {
  }


  onSubmit() {
    let loginInfor = this.loginForm.value;
    this.api.login(loginInfor.username, loginInfor.password).subscribe(result => console.log(result));
  }

}
