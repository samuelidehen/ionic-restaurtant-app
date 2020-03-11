import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemOptionsPage } from './item-options';
import { ItemOptionsPageRoutingModule } from './item-options-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemOptionsPageRoutingModule
  ],
  declarations: [
    ItemOptionsPage,
  ]
})
export class ItemOptionsModule {
}



