import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _apiUrl = 'http://localhost:8081/customers';

  constructor(private http: HttpClient) { }

  //Métodos para el crud completo de CUSTOMERS

  createCustomer(customer: Customer): Observable<Customer>{
    console.log(customer);

    return this.http.post<Customer>(`${this._apiUrl}/`, customer);
  }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this._apiUrl}/`);
  }

  updateCustomer(customer:Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this._apiUrl}/${customer.id_customer}`, customer);
  }

  deleteCustomer(id:number): Observable<void>{
    return this.http.delete<void>(`${this._apiUrl}/${id}`);
  }
}
