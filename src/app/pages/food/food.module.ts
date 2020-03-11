import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FoodPage } from './food';
import { FoodFilterPage } from '../food-filter/food-filter';
import { FoodPageRoutingModule } from './food-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodPageRoutingModule
  ],
  declarations: [
    FoodPage,
    FoodFilterPage
  ],
  entryComponents: [
    FoodFilterPage
  ]
})
export class FoodModule { }
