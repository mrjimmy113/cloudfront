import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminGearComponent } from './admin-gear/admin-gear.component';
import { AdminGearInsertComponent } from './admin-gear-insert/admin-gear-insert.component';
import { AdminGearDashComponent } from './admin-gear-dash/admin-gear-dash.component';
import { AdminGearUpdateComponent } from './admin-gear-update/admin-gear-update.component';
import { AccountRegComponent } from './account-reg/account-reg.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AdminAccountDashComponent } from './admin-account-dash/admin-account-dash.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent,
    AdminGearComponent,
    AdminGearInsertComponent,
    AdminGearDashComponent,
    AdminGearUpdateComponent,
    AccountRegComponent,
    AccountUpdateComponent,
    AdminAccountDashComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
