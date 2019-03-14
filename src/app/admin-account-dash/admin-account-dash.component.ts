import { LoaderService } from './../loader.service';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-account-dash',
  templateUrl: './admin-account-dash.component.html',
  styleUrls: ['./admin-account-dash.component.css']
})
export class AdminAccountDashComponent implements OnInit {
  accountList;
  constructor(private accountSer: AccountService,private loader:LoaderService) { }

  ngOnInit() {
    this.prepareData();
  }

  prepareData() {
    this.loader.show();
    this.accountSer.getALL().subscribe(result => {
      this.accountList = result
      this.loader.hide();
    });
  }
  deleteGear(id) {
    if(confirm('Do you want to delete this account')) {
      this.loader.show();
      this.accountSer.delete(id).subscribe(result => this.prepareData());
    }
    
  }
  makeAdmin(id) {
    this.loader.show();
    this.accountSer.makeAdmin(id).subscribe(result => this.prepareData());
    
  }
}
