import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})




export class AccountService {
  private loginAPI = "login";
  
  constructor(private http: HttpClient) { }

  login(username, password) : Observable<string> {
    let loginInfo = {
      "username": username,
      "password": password,
    };
    return this.http.post<string>(environment.apiEndPoint + this.loginAPI, loginInfo);
  }
  callGet() {
    return this.http.get(environment.apiEndPoint + this.loginAPI);
  }
}

