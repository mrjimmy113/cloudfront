
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm;
  isSubmit = false;
  constructor(private api:AccountService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    });
  
  }
  
  get f() {return this.loginForm.controls}

  onSubmit() {
    // let loginInfor = this.loginForm.value;
    // this.api.login(loginInfor.username, loginInfor.password).subscribe(result => console.log(result));
    this.isSubmit = true;
    if(this.loginForm.invalid) {
      console.log('CL');
      return;
    }
  }

}
