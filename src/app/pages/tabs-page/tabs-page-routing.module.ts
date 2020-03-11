import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { FoodPage } from '../food/food';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'food',
        children: [
          {
            path: '',
            component: FoodPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          }
        ]
      },
      {
        path: 'restaurants',
        children: [
          {
            path: '',
            loadChildren: '../restaurant-list/restaurant-list.module#RestaurantListModule'
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          },
          {
            path: 'restaurant-details/:slug',
            children: [
              { path: '',
            loadChildren: '../restaurant-detail/restaurant-detail.module#RestaurantDetailModule'
          },
          {
            path: ':item_id',
            loadChildren: '../item-options/item-options.module#ItemOptionsModule'
          },
        ]},
        {
          path: 'cart-details',
          loadChildren: '../cart-details/cart-details.module#CartDetailsModule'
        }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/food',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

