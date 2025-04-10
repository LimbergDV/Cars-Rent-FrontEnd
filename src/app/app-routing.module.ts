import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './ui/admin/page-admin/page-admin.component';
import { PageCustomersComponent } from './ui/admin/page-customers/page-customers.component';
import { PageCarsComponent } from './ui/admin/page-cars/page-cars.component';

const routes: Routes = [
  {path: "rents", component: PageAdminComponent},
  {path: "customers", component: PageCustomersComponent},
  {path: "cars", component: PageCarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
