import { TypeService } from './type.service';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { GearDetailComponent } from './gear-detail/gear-detail.component';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  searchText;
  typeList;
  activeTypeId = -1;
  constructor(private router:Router, private modal:ModalService,
    private typeSer:TypeService, private loader:LoaderService,private route:Router){}
  ngOnInit(): void {
    this.typeSer.getAll().subscribe(result => {
      this.typeList = result
    });
    
  }
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
    this.route.navigate(['/']);
  }
  searchOp() {
    this.router.navigateByUrl("/search/" + this.searchText);
  }
  removeModal() {
    this.modal.destroy();
  }
  public activeType(id) {
    this.activeTypeId = id;
  }
}
