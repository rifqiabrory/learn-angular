import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  testParams(){
    this.router.navigate(['/customer/list'], {queryParams:{balance: 5000}});
  }
}
