import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { StartPage } from './start';
import { StartPageRoutingModule } from './start-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StartPageRoutingModule
  ],
  declarations: [StartPage],
  entryComponents: [StartPage],
})
export class StartModule {}
