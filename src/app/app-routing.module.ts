import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './ui/admin/page-admin/page-admin.component';

const routes: Routes = [
  {path: "", component: PageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
