import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../../core/customers/services/customer.service';
import Swal from 'sweetalert2';
import { Customer } from '../../../core/customers/models/customer';
import { AddCustomerUseCase } from '../../../core/customers/use-cases/add-customer.use_case';
import { showSuccessMessage } from '../../helpers/modals/modasl';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.css']
})
export class FormCustomersComponent{
  customers: Customer[] = [];

  customer: Customer = {
    Id: 0,
    First_Name: '',
    Last_name: '',
    Email: '',
    Phone_number: '',
    Number_license: ''
  };


  constructor(private createCustomer: AddCustomerUseCase) {}


  onSubmit(): void {
      if(this.customer.First_Name && this.customer.Last_name && this.customer.Email && this.customer.Phone_number && this.customer.Number_license) {
        this.createCustomer.run(this.customer).subscribe(
          () => {
            showSuccessMessage('¡Registro exitoso!', 'El cliente ha sido registrado correctamente.')
            this.resetForm()
          },
          (error) => {
            console.log('Error al registrar el producto:', error);
          }
        )
      }
    }
    private resetForm(): void {
      this.customer = {  Id: 0,
        First_Name: '',
        Last_name: '',
        Email: '',
        Phone_number: '',
        Number_license: ''
    }
  }
}
