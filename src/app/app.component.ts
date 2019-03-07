import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  checkLogin() {
    let account = sessionStorage.getItem('account');
    if(account) {
      let tmp = JSON.parse(account);
      this.name = tmp.firstName +' ' + tmp.lastName; 
      return true;
    }
    
    return false;
  }
  logout() {
    sessionStorage.removeItem('account');
  }
}
