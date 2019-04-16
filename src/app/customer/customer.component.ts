  import { Component, OnInit } from '@angular/core';
  import { Customer } from '../customer';
  import { CustomerService } from '../customer.service';
import { RupiahPipe } from '../shared/papes/rupiah.pipe';
import { ActivatedRoute } from '@angular/router';
// import {Customer} from './customer';
// import {Customers} from './customers-list';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // customer = Customer;
  balance:number;
  selectCustomer: Customer;
  customers:Customer[];

  constructor(private customerService: CustomerService, private rupiah: RupiahPipe, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    //dengan queryParams
    this.activatedRoute.queryParams.subscribe(
      params => {
        let balance = params['balance'];
        alert(this.rupiah.transform(balance,"$"));
      } 
    );

    // //dengan params
    // this.activatedRoute.params.subscribe(
    //   params => {
    //     let balance = params['balance'];
    //     alert(this.rupiah.transform(balance,"$"));
    //   } 
    // );
    //alert(this.rupiah.transform(2000,"$"));
    this.getCustomersList();
  }

  getCustomersList(): void{
    this.customers = this.customerService.getCustomers();
  }
  
  onSelect(customer:Customer):void{
    this.selectCustomer = customer;
  }

}
