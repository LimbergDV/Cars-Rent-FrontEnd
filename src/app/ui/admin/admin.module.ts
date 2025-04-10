import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRentsComponent } from './table-rents/table-rents.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageCarsComponent } from './page-cars/page-cars.component';
import { FormCarsComponent } from './form-cars/form-cars.component';
import { FormCustomersComponent } from './form-customers/form-customers.component';
import { PageCustomersComponent } from './page-customers/page-customers.component';
import { TableCustomerComponent } from './table-customer/table-customer.component';
import { TableCarsComponent } from './table-cars/table-cars.component';
import { FormRentComponent } from './form-rent/form-rent.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableRentsComponent,
    PageAdminComponent,
    PageCarsComponent,
    FormCarsComponent,
    FormCustomersComponent,
    PageCustomersComponent,
    TableCustomerComponent,
    TableCarsComponent,
    FormRentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
