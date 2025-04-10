import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Customer } from '../../../core/customers/models/customer';
import { GetCustomersUseCase } from '../../../core/customers/use-cases/get-allCustomers.use_case';
import { DeleteCustomerUseCase } from '../../../core/customers/use-cases/delete-customer.use_case';
import { UpdateCustomersUseCase } from '../../../core/customers/use-cases/update-customer.use_case';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrl: './table-customer.component.css'
})
export class TableCustomerComponent implements OnInit{
  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;

  constructor(
    private getCustomersUseCase: GetCustomersUseCase,
    private deleteCustomerUseCase: DeleteCustomerUseCase,
    private updateCustomerUseCase: UpdateCustomersUseCase
  ) {}

  ngOnInit(): void {
    this.obtainCustomers();
  }

  obtainCustomers(): void {
    this.getCustomersUseCase.run().subscribe(
      (response) => {
        console.log("Clientes recibidos:", response);
        this.customers = response;
      },
      (err) => {
        console.error("Error al obtener clientes:", err);
        Swal.fire('Error', 'No se pudieron obtener los clientes', 'error');
      }
    );
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = {...customer};
  }

  updateCustomer() {
    if (this.selectedCustomer && this.selectedCustomer.Id) {
      this.updateCustomerUseCase.run(this.selectedCustomer.Id, this.selectedCustomer).subscribe(() => {
        this.obtainCustomers();
        this.selectedCustomer = null;
        Swal.fire('Éxito', 'Cliente actualizado correctamente', 'success');
      });
    }
  }

  deleteCustomer(id: number) {
    if(id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5DFF34',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        color: 'black',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteCustomerUseCase.run(id).subscribe(
            () => {
              Swal.fire('Eliminado!', 'El cliente ha sido eliminado.', 'success');
              this.obtainCustomers();
            },
            (error) => {
              Swal.fire('Error!', 'Hubo un problema al eliminar el cliente.', 'error');
            }
          );
        }
      });
    }
  }
}
