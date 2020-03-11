import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantItemPage } from './restaurant-item';
import { RestaurantItemPageRoutingModule } from './restaurant-item-routing.module';
import { IonicModule } from '@ionic/angular';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RestaurantItemPageRoutingModule
  ],
  declarations: [
    RestaurantItemPage,
  ]
})
export class RestaurantItemModule {
}



