import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: '',
        redirectTo: 'dashboard/products',
        pathMatch: 'full'
      },
      //{
      //  path: 'dashboard',
      //  redirectTo: 'products',
      //  pathMatch: 'full',
      //},
      {
        path: 'dashboard/products',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardRouterModule { }
