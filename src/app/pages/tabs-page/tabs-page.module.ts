import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MapModule } from '../map/map.module';
import { FoodModule } from '../food/food.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { RestaurantDetailModule } from '../restaurant-detail/restaurant-detail.module';
import { RestaurantListModule } from '../restaurant-list/restaurant-list.module';
import { ItemOptionsModule } from '../item-options/item-options.module';
import { CartDetailsModule } from '../cart-details/cart-details.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    FoodModule,
    SessionDetailModule,
    RestaurantDetailModule,
    RestaurantListModule,
    ItemOptionsModule,
    CartDetailsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
