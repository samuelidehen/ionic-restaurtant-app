import { Component, ViewEncapsulation, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesData } from '../../providers/places-data';

@Component({
  selector: 'page-restaurant-item',
  templateUrl: 'restaurant-item.html',
  styleUrls: ['./restaurant-item.scss'],
})
export class RestaurantItemPage {
  restaurant: any;
  section: any;
  menu: any;
  menus: any;
  constructor(
    private placesData: PlacesData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewDidEnter() {
      const slug = this.route.snapshot.paramMap.get('slug');
      const item = this.route.snapshot.paramMap.get('item');
      this.placesData.getMenu(slug).subscribe((menus: any) => {
        this.menus = menus.data;
        this.section = menus.data.data[0];
       });
  }
}
