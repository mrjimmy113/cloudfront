import { Account } from './model/account';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
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
  private createAPI = "account/create"
  private checkUsernameAPI ="account/check/"
  private getALLAPI = "account/getAll";
  private deleteAPI = "account/dash/";
  private makeAdminAPI = "account/dash/";
  constructor(private http: HttpClient) { }

  login(username, password) : Observable<Account> {
    let loginInfo = {
      "username": username,
      "password": password,
    };
    return this.http.post<Account>(environment.apiEndPoint + this.loginAPI, loginInfo);
  }
  create(account) {
    return this.http.post<Account>(environment.apiEndPoint + this.createAPI, account);
  }
  checkUsername(username):Observable<boolean> {
    return this.http.get<boolean>(environment.apiEndPoint + this.checkUsernameAPI + username);
  }
  getALL():Observable<Account[]> {
    return this.http.get<Account[]>(environment.apiEndPoint + this.getALLAPI);
  }
  delete(id):Observable<string> {
    return this.http.delete<string>(environment.apiEndPoint + this.deleteAPI + id )
  }
  makeAdmin(id):Observable<string> {
    return this.http.get<string>(environment.apiEndPoint + this.makeAdminAPI + id);
  }
}

