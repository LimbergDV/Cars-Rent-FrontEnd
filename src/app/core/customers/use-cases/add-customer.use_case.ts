import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../models/customer";


@Injectable ({
  providedIn: 'root'
})

export class AddCustomerUseCase {
  constructor(private CustomerService: CustomerService) {}

  run(Customer: Customer): Observable<void> {
    return this.CustomerService.addCustomer(Customer)
  }
}
