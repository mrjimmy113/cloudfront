import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private getOrderAccIdAPI = "order/getOrderAcc/";
  private deleteOrderAPI ="order/delete/";
  private getAllAPI = 'order/getALL';
  private compleAPI = 'order/complete/';
  constructor(private http:HttpClient) { }

  getOrderAccId(accountId):Observable<JSON> {
    return this.http.get<JSON>(environment.apiEndPoint + this.getOrderAccIdAPI + accountId);
  }
  deleteOrder(orderId):Observable<string> {
    return this.http.get<string>(environment.apiEndPoint + this.deleteOrderAPI + orderId);
  }
  getALL():Observable<JSON> {
    return this.http.get<JSON>(environment.apiEndPoint + this.getAllAPI);
  }
  complete(orderId) : Observable<string> {
    return this.http.get<string>(environment.apiEndPoint + this.compleAPI + orderId);
  }
}
