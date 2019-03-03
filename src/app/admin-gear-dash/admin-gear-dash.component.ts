import { GearService } from './../gear.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-gear-dash',
  templateUrl: './admin-gear-dash.component.html',
  styleUrls: ['./admin-gear-dash.component.css']
})
export class AdminGearDashComponent implements OnInit {
  gearList;
  constructor(private gearSer:GearService) { }

  ngOnInit() {
    this.prepareData();
  }

  prepareData() {
    this.gearSer.getALL().subscribe(result => this.gearList = result);
  }
}
