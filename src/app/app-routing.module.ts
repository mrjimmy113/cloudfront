import { AdminAuthService as AdminAuth} from './admin-auth.service';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { CartComponent } from './cart/cart.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AdminAccountDashComponent } from './admin-account-dash/admin-account-dash.component';
import { AccountRegComponent } from './account-reg/account-reg.component';
import { AdminGearUpdateComponent } from './admin-gear-update/admin-gear-update.component';
import { AdminGearDashComponent } from './admin-gear-dash/admin-gear-dash.component';
import { AdminGearInsertComponent } from './admin-gear-insert/admin-gear-insert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { GearTypeComponent } from './gear-type/gear-type.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: AccountRegComponent },
  { path: 'search/:value', component: SearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'type/:id', component: GearTypeComponent },
  { path: 'accountInfor', canActivate:[AdminAuth], component: AccountUpdateComponent },
  {
    path: 'admin',  canActivateChild:[AdminAuth],children: [
      { path: 'gear/insert', component: AdminGearInsertComponent },
      { path: 'gear/dash', component: AdminGearDashComponent },
      { path: 'gear/update', component: AdminGearUpdateComponent },
      { path: 'order', component: AdminOrderComponent },
      { path: 'account/dash', component: AdminAccountDashComponent },
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }