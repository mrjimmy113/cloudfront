import { ModalService } from './../modal.service';
import { GearDetailComponent } from './../gear-detail/gear-detail.component';
import { LoaderService } from './../loader.service';
import { AppComponent } from './../app.component';
import { GearService } from './../gear.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-type',
  templateUrl: './gear-type.component.html',
  styleUrls: ['./gear-type.component.css']
})
export class GearTypeComponent implements OnInit {
  id;
  gearList;
  currentPage = 1;
  maxPage = 0;
  constructor(private route:ActivatedRoute, private gearSer:GearService,
     private app:AppComponent,private loader:LoaderService, private modelSer:ModalService) { }

  ngOnInit() {
    this.loader.show();
    this.route.params.subscribe(result =>{
      this.id = result.id
      this.preparePage(this.id,this.currentPage);
      this.gearSer.getMaxPageType(this.id).subscribe(result => {
        this.maxPage = parseInt(result)
        this.loader.hide();
      });
      this.app.activeType(this.id);
    })
    
  }
  preparePage(id,pageNum) {
    this.gearList = this.gearSer.getPageType(id,pageNum).subscribe(
      result => {
        this.gearList = result
      }
    );
    
  }
  loadPage(pageNum) {
    this.currentPage = pageNum;
    this.preparePage(this.id, pageNum);
  }
  public getCurrentTypeId() {
    return this.id;
  }
  showDetail(gear) {
    this.modelSer.init(GearDetailComponent,gear,{});
  }
}
