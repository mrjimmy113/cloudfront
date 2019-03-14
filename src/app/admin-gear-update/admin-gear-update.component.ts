import { LoaderService } from './../loader.service';
import { GearService } from './../gear.service';
import { Gear } from './../model/gear';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-admin-gear-update',
  templateUrl: './admin-gear-update.component.html',
  styleUrls: ['./admin-gear-update.component.css']
})
export class AdminGearUpdateComponent implements OnInit {
  gear;
  tmp:File;
  typeList;
  dumpFileInput;
  oldFileName;
  constructor(private router:ActivatedRoute, private typeSer:TypeService, 
    private gearSer:GearService,private loader:LoaderService, private route:Router) { }

  ngOnInit() {
    console.log(this.router.params);
    let tmp =JSON.stringify(this.router.params);
    let tmp2 = JSON.parse(tmp);
    this.gear = JSON.parse(tmp2._value.gear);
    console.log(this.gear);
    this.oldFileName = this.gear.avatarURL;
    this.typeList = JSON.parse(tmp2._value.typeList)
    
  }
  onFileChange(event) {
    this.tmp = event.target.files[0];
  }
  onSubmit() {
    this.loader.show();
    const fd = new FormData();
    if(this.tmp != null) {
      fd.append('image',this.tmp,this.tmp.name); 
    }
    this.gear.avatarURL = this.oldFileName;
    fd.append('gearInfo', JSON.stringify(this.gear));
    this.gearSer.update(fd).subscribe(rep => {
      alert('Gear Updated');
      this.loader.hide();
      this.route.navigate(['admin/gear/dash']);
    });
  }

}
