import { Injectable } from '@angular/core';
import {Customer} from './customer';
import {Customers} from './customers-list';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  getCustomers(): Customer[] {
    return Customers;
  }
}
