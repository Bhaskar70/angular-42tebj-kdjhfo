import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';

const routes: Routes = [
  {
    matcher: (UrlSegment) => {
      console.log(UrlSegment);
      if (
        UrlSegment.join('https://angular-42tebj-xkbt8m.stackblitz.io/one') &&
        UrlSegment[0].path === 'customers'
      ) {
        console.log(UrlSegment, 'yeret');
        return {
          consumed: UrlSegment,
        };
      }

      return null;
    },
    redirectTo: '/one',
    // pathMatch: 'full',
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./double/double.module').then((m) => m.DoubleModule),
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
