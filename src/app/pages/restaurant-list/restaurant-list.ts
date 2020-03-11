import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { PlacesData } from '../../providers/places-data';

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
  styleUrls: ['./restaurant-list.scss'],
})
export class RestaurantListPage implements OnInit {
  restaurants: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public placesData: PlacesData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
    this.placesData.getData().subscribe((restaurants: any) => {
      this.restaurants = restaurants.data;
    });
  }

  goToRestaurantTwitter(restaurant: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${restaurant.twitter}`,
      '_blank'
    );
  }

  async openRestaurantShare(restaurant: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + restaurant.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + restaurant.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + restaurant.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(restaurant: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + restaurant.name,
      buttons: [
        {
          text: `Call ( ${restaurant.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + restaurant.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }

  ngOnInit() {
  }
}
