import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../models/customer";

@Injectable ({
  providedIn: 'root'
})

export class GetCustomersUseCase {
  constructor(private customerService: CustomerService) {}

  run(): Observable<Customer[]> {
    return this.customerService.getCustomers()
  }
}
