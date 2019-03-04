import { map } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Gear } from './model/gear';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GearService {
  private createAPI = "gear/create";
  private getAllAPI = "gear/getAll";
  private deleteAPI = "gear/delete";
  private updateAPI = "gear/update";
  constructor(private http: HttpClient) { }

  create(gear):Observable<string> {
    return this.http.post<string>(environment.apiEndPoint + this.createAPI,gear);
  }

  getALL():Observable<Gear[]> {
    return this.http.get<Gear[]>(environment.apiEndPoint + this.getAllAPI);
  }
  deleteGear(infor):Observable<string> {
    return this.http.post<string>(environment.apiEndPoint + this.deleteAPI,infor);
  }
  update(gear):Observable<string> {
    return this.http.post<string>(environment.apiEndPoint + this.updateAPI,gear);
  }
}
