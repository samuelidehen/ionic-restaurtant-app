import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemOptionsPage } from './item-options';

const routes: Routes = [
  {
    path: '',
    component: ItemOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemOptionsPageRoutingModule { }
