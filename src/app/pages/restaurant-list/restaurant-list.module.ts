import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RestaurantListPage } from './restaurant-list';
import { RestaurantListPageRoutingModule } from './restaurant-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RestaurantListPageRoutingModule
  ],
  declarations: [RestaurantListPage],
})
export class RestaurantListModule {}
