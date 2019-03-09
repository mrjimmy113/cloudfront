import { GearService } from './../gear.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route:ActivatedRoute, private gearSer:GearService) { }

  ngOnInit() {
    this.route.params.subscribe(result => 
      {
        this.searchText = result.value;
        this.preparePage(this.searchText, this.currentPage);
        this.gearSer.getMaxPage(this.searchText).subscribe(result => this.maxPage = parseInt(result));
    })
  }
  preparePage(searchText,pageNum) {
    this.gearList = this.gearSer.getPage(this.searchText,this.currentPage).subscribe(
      result => {
        this.gearList = result
      }
    );
    
  }
  loadPage(pageNum) {
    this.currentPage = pageNum;
    this.preparePage(this.searchText, pageNum);
  }

}
