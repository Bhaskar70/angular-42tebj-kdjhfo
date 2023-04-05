import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
const routes: Routes = [,];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'one',
        component: OneComponent,
      },
      { path: 'two', component: TwoComponent },
    ]),
  ],
  declarations: [OneComponent, TwoComponent],
})
export class DoubleModule {}
