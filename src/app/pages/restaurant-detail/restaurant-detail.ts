import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesData } from '../../providers/places-data';

@Component({
  selector: 'page-restaurant-detail',
  templateUrl: 'restaurant-detail.html',
  styleUrls: ['./restaurant-detail.scss'],
})
export class RestaurantDetailPage {
  restaurant: any;
  menu: any;
  menus: any;
  constructor(
    private placesData: PlacesData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewDidEnter() {
    this.placesData.getData().subscribe((restaurants: any) => {
      const slug = this.route.snapshot.paramMap.get('slug');
      this.placesData.getMenu(slug).subscribe((menus: any) => {
        this.menus = menus.data;
       });
      for (const restaurant of restaurants.data) {
        if (restaurant.slug === slug) {
          this.restaurant = restaurant;
          break;
        }
      }
    });
  }
  SelectedSection(section, item) {
    this.placesData.setSelected(section, item);
  }
}
