import { LoaderService } from './../loader.service';
import { HttpClient } from '@angular/common/http';
import { GearService } from './../gear.service';
import { Gear } from './../model/gear';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TypeService } from '../type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-gear-insert',
  templateUrl: './admin-gear-insert.component.html',
  styleUrls: ['./admin-gear-insert.component.css']
})
export class AdminGearInsertComponent implements OnInit {
  gear = new Gear();
  tmp:File;
  typeList;
  constructor(private api:HttpClient, private typeSer: TypeService,
     private gearSer:GearService,private loader:LoaderService,private route:Router) { }

  ngOnInit() {
    this.typeSer.getAll().subscribe(result => this.typeList = result);
  }

  onFileChange(event) {
    this.tmp = event.target.files[0];
  }

  onSubmit() {
    this.loader.show();
    const fd = new FormData();
    fd.append('image',this.tmp,this.tmp.name); 
    fd.append('gearInfo', JSON.stringify(this.gear));
    this.gearSer.create(fd).subscribe(rep => {
      alert('Gear Added');
      this.loader.hide();
      this.route.navigate(['admin/gear/dash']);
    });
  }

}
