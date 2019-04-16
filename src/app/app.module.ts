import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { RupiahPipe } from './shared/papes/rupiah.pipe';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
//import {CustomerService} from './customer.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
    RupiahPipe,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RupiahPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
