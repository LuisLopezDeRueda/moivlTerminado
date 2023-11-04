import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantePage } from './restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantePage
  },
  {
    path: 'restaurante-detail',
    loadChildren: () => import('./restaurante-detail/restaurante-detail.module').then( m => m.RestauranteDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantePageRoutingModule {}
