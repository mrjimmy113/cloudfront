import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-account-dash',
  templateUrl: './admin-account-dash.component.html',
  styleUrls: ['./admin-account-dash.component.css']
})
export class AdminAccountDashComponent implements OnInit {
  accountList;
  constructor(private accountSer: AccountService) { }

  ngOnInit() {
    this.prepareData();
  }

  prepareData() {
    this.accountSer.getALL().subscribe(result => this.accountList = result);
  }
  deleteGear(id) {
    if(confirm('Do you want to delete this account')) {
      this.accountSer.delete(id).subscribe(result => this.prepareData());
    }
    
  }
  makeAdmin(id) {
    this.accountSer.makeAdmin(id).subscribe(result => this.prepareData());
    
  }
}
