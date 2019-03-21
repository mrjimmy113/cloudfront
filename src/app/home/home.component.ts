import { LoaderService } from './../loader.service';
import { GearService } from './../gear.service';
import { Component, OnInit } from '@angular/core';
import { Gear } from '../model/gear';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gearList : Gear[];
  constructor(private gearSer:GearService, private loader:LoaderService) { }

  ngOnInit() {
    this.loader.show();
    this.gearSer.getRandom(5).subscribe(result => {
      this.gearList = result
      this.loader.hide();
    });
  }

}
