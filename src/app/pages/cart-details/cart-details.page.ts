import { Component, OnInit } from '@angular/core';
import { PlacesData } from '../../providers/places-data';
@Component({
  selector: 'cart-details',
  templateUrl: './cart-details.page.html',
  styleUrls: ['./cart-details.page.scss'],
})
export class CartDetailsPage implements OnInit {
  selectionCount: any;
  itemName: String;
  itemPrice: number;
  extraName: String;
  constructor(  private placesData: PlacesData) { }

  ngOnInit() {
    this.placesData.selectCount.subscribe(message => this.selectionCount = message);
    this.placesData.selectedName.subscribe(message => this.itemName = message);
    this.placesData.selectPrice.subscribe(message => this.itemPrice = message);
    this.extraName = this.placesData.extra;
}

}
