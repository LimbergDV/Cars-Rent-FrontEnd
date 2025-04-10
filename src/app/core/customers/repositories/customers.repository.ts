import { Observable } from 'rxjs';
import { Customer } from '../models/customer';



export abstract class CustomerRepository {
    abstract getCustomers(): Observable<Customer[]>;
    abstract addCustomer(Customer: Customer): Observable<void>;
    abstract deleteCustomer(id: number): Observable<void>;
    abstract updateCustomer(id: number, Customer: Customer): Observable<void>;
    abstract getCustomerById(id: number): Observable<Customer>
}

