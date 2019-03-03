import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Type } from './model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private getAllAPI = 'type/all';

  constructor(private http:HttpClient) { }

  getAll() : Observable<Type[]> {
    return this.http.get<Type[]>(environment.apiEndPoint + this.getAllAPI);
  }
}
