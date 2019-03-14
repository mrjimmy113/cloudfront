import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGearInsertComponent } from './admin-gear-insert/admin-gear-insert.component';
import { AdminGearDashComponent } from './admin-gear-dash/admin-gear-dash.component';
import { AdminGearUpdateComponent } from './admin-gear-update/admin-gear-update.component';
import { AccountRegComponent } from './account-reg/account-reg.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AdminAccountDashComponent } from './admin-account-dash/admin-account-dash.component';
import { SearchComponent } from './search/search.component';
import { GearDetailComponent } from './gear-detail/gear-detail.component';
import { CartComponent } from './cart/cart.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { GearTypeComponent } from './gear-type/gear-type.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminGearInsertComponent,
    AdminGearDashComponent,
    AdminGearUpdateComponent,
    AccountRegComponent,
    AccountUpdateComponent,
    AdminAccountDashComponent,
    SearchComponent,
    GearDetailComponent,
    CartComponent,
    AdminOrderComponent,
    GearTypeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:  [
    GearDetailComponent
  ]
})
export class AppModule { }
