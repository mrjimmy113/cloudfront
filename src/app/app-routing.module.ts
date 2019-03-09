import { AccountUpdateComponent } from './account-update/account-update.component';
import { AdminAccountDashComponent } from './admin-account-dash/admin-account-dash.component';
import { AccountRegComponent } from './account-reg/account-reg.component';
import { AdminGearUpdateComponent } from './admin-gear-update/admin-gear-update.component';
import { AdminGearDashComponent } from './admin-gear-dash/admin-gear-dash.component';
import { AdminGearInsertComponent } from './admin-gear-insert/admin-gear-insert.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin/dashboard', component: AdminDashComponent},
  {path: 'admin/gear/insert', component: AdminGearInsertComponent},
  {path: 'admin/gear/dash', component: AdminGearDashComponent},
  {path: 'admin/gear/update', component: AdminGearUpdateComponent},
  {path: 'signUp', component: AccountRegComponent},
  {path: 'admin/account/dash', component:AdminAccountDashComponent},
  {path: 'accountInfor', component: AccountUpdateComponent},
  {path: 'search/:value', component: SearchComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}