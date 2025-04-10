import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerRepository } from '../repositories/customers.repository';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CustomerRepository {
  private apiUrl = 'http://localhost:8081/customers/';

  constructor(private http: HttpClient) {
      super();
    }

    getCustomers(): Observable<Customer[]> {
      return this.http.get<{clientes: Customer[]}>(this.apiUrl).pipe(
        map(response => response.clientes)
      );
    }

    addCustomer(Customer: Customer): Observable<void> {
      return this.http.post<void>(this.apiUrl, Customer);
    }

    deleteCustomer(id: number): Observable<void>{
      const url = `${this.apiUrl}${id}`;
      return this.http.delete<void>(url);
    }

    updateCustomer(id: number, Customer: Customer): Observable<void>{
      const url = `${this.apiUrl}${id}`;
      return this.http.put<void>(url, Customer);
    }

    getCustomerById(id: number): Observable<Customer>{
      const url = `${this.apiUrl}${id}`;
      return this.http.get<Customer>(url);
    }
}
