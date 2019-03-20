import { Account } from './model/account';
import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivateChild, CanActivate{
  
  

  constructor(private route: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let acc:Account = JSON.parse(sessionStorage.getItem('account'));
    if(!acc) {
      this.route.navigate(['login']);
      return false;
    }
    return true;
  }
  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let acc:Account = JSON.parse(sessionStorage.getItem('account'));
    if(!acc) {
      this.route.navigate(['login']);
      return false;
    }
    if(!acc.isAdmin) {
      this.route.navigate(['login']);
      return false;
    }

    return true;
    
  }
  
}
