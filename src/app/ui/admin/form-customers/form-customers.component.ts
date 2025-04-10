import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../../core/customers/services/customer.service';
import Swal from 'sweetalert2';
import { Customer } from '../../../core/customers/models/customer';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.css']
})
export class FormCustomersComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = {
    id_customer: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    number_license: ''
  };
  isEditMode = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer).subscribe(() => {
        this.loadCustomers();
        this.resetForm();
        Swal.fire('Actualizado', 'Cliente actualizado correctamente', 'success');
      });
    } else {
      this.customerService.createCustomer(this.customer).subscribe(() => {
        this.loadCustomers();
        this.resetForm();
        Swal.fire('Registrado', 'Cliente registrado correctamente', 'success');
      });
    }
  }

  editCustomer(customer: Customer): void {
    this.customer = { ...customer };
    this.isEditMode = true;
  }

  deleteCustomer(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esta acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(id).subscribe(() => {
          this.loadCustomers();
          Swal.fire('Eliminado', 'Cliente eliminado correctamente', 'success');
        });
      }
    });
  }

  resetForm(): void {
    this.customer = {
      id_customer: 0,
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      number_license: ''
    };
    this.isEditMode = false;
  }
}
