import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRentsComponent } from './table-rents/table-rents.component';
import { PageAdminComponent } from './page-admin/page-admin.component';



@NgModule({
  declarations: [
    TableRentsComponent,
    PageAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
