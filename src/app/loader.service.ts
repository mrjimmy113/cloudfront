import { Injectable } from '@angular/core';
import { load } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderID = 'loader';
  constructor() { }

  show() {
    document.getElementById(this.loaderID).className = 'show';
  }
  hide() {
    document.getElementById(this.loaderID).className = 'hidden';
  }
}
