import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomerService } from "../services/customer.service";


@Injectable ({
  providedIn: 'root'
})

export class DeleteCustomerUseCase {
  constructor(private customerService: CustomerService) {}

  run(id: number): Observable<void> {
    return this.customerService.deleteCustomer(id)
  }
}
