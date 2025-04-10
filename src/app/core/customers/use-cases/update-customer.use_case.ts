import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../models/customer";

@Injectable ({
  providedIn: 'root'
})

export class UpdateCustomersUseCase {
  constructor(private customerService: CustomerService) {}

  run(id: number, Customer: Customer): Observable<void> {
    return this.customerService.updateCustomer(id, Customer)
  }
}
