import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CustomersComponent],
})
export class CustomersModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
