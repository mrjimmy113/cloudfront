import { LoaderService } from './../loader.service';
import { ModalService } from './../modal.service';
import { GearService } from './../gear.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GearDetailComponent } from '../gear-detail/gear-detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText;
  gearList;
  currentPage = 1;
  maxPage = 0;
  constructor(private route:ActivatedRoute, private gearSer:GearService, private modelSer:ModalService, private loader:LoaderService) { }

  ngOnInit() {
    this.loader.show();
    this.route.params.subscribe(result => 
      {
        this.searchText = result.value;
        this.preparePage(this.searchText, this.currentPage);
        this.gearSer.getMaxPage(this.searchText).subscribe(result => {
          this.maxPage = parseInt(result)
          this.loader.hide();
        });
        
    })
  }
  preparePage(searchText,pageNum) {
    this.gearList = this.gearSer.getPage(searchText,pageNum).subscribe(
      result => {
        this.gearList = result
        this.loader.hide();
      }
    );
    
  }
  loadPage(pageNum) {
    this.loader.show();
    this.currentPage = pageNum;
    this.preparePage(this.searchText, pageNum);
  }
  showDetail(gear) {
    this.modelSer.init(GearDetailComponent,gear,{});
  }

}
