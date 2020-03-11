import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantListPage } from './restaurant-list';
import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';
const routes: Routes = [
  {
    path: '',
    component: RestaurantListPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantListPageRoutingModule {}
