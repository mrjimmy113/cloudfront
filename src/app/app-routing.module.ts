import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin/dashboard', component: AdminDashComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}