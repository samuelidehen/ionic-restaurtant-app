import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantItemPage } from './restaurant-item';

const routes: Routes = [
  {
    path: '',
    component: RestaurantItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantItemPageRoutingModule { }
