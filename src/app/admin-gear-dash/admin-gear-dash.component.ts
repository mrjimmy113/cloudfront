import { LoaderService } from './../loader.service';
import { GearService } from './../gear.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-admin-gear-dash',
  templateUrl: './admin-gear-dash.component.html',
  styleUrls: ['./admin-gear-dash.component.css']
})
export class AdminGearDashComponent implements OnInit {
  gearList;
  typeList;
  constructor(private gearSer:GearService, private router:Router, private typeSer:TypeService,private loader:LoaderService) { }

  ngOnInit() {
    this.prepareData();
    this.typeSer.getAll().subscribe(result => this.typeList = result);
  }

  prepareData() {
    this.loader.show();
    this.gearSer.getALL().subscribe(result => {
      this.gearList = result
      this.loader.hide();
    });
  }
  deleteGear(infor) {
    if(confirm("Are you sure to delete this gear ?")) {
      this.loader.show();
      this.gearSer.deleteGear(infor).subscribe(result => {
        if(result == '200') {
          this.prepareData();
        }
      })
    }
  }
  goToUpdate(gear) {
    let infor = {
      gear: JSON.stringify(gear),
      typeList: JSON.stringify(this.typeList)
    };
    this.router.navigate(['admin/gear/update', infor]);
  }
}
