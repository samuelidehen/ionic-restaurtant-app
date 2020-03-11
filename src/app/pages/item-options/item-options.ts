import { Component, ViewEncapsulation, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesData } from '../../providers/places-data';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'item-options',
  templateUrl: 'item-options.html',
  styleUrls: ['./item-options.scss'],
})
export class ItemOptionsPage implements OnInit {
  restaurant: any;
  section: any;
  labels: any;
  menu: any;
  item: any;
  isSelected: any;
  valueSelected: any;
  Option_id: any;
  parent_option_id: any;
  selectedOption_id: any;

  selectionCount;
  total = 0;
  count = 0;
  extra = ' ';
  checkboxOptionId = 0;


  constructor(
    private placesData: PlacesData,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {}
  ngOnInit() {
     this.placesData.selectCount.subscribe(message => this.selectionCount = message);
  }
  ionViewDidEnter() {
    this.placesData.getData().subscribe((restaurants: any) => {
      const slug = this.route.snapshot.paramMap.get('slug');
      this.placesData.getMenu(slug).subscribe((response: any) => {
        const item_id = +this.route.snapshot.paramMap.get('item_id');
        this.section = response.data.data;
        this.labels = response.data.labels;
         for (const menu of this.section) {
           for (let i = 0 ; i < menu.items.length; i++) {
         if  (menu.items[i].item_id === item_id) {
              this.item = menu.items[i];
              this.total = +this.item.base_price;
              this.Option_id = this.item.option_id;
              this.parent_option_id = this.item.parent_option_id;
          }
        }
           }
       });
      for (const restaurant of restaurants.data) {
        if (restaurant.slug === slug) {
          this.restaurant = restaurant;
          break;
        }
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your item has been added to cart succesfully.',
      duration: 2000,
      color: 'secondary',
      showCloseButton: false,
      position: 'top'
    });
    toast.present();
  }

  convertStringtoArray(str) {
   const arr = str.split(',');
    return arr;
    }

    toShow( option, isSelected) {
     const value = option.values;
     this.Option_id = option.option_id;
     this.parent_option_id = option.parent_option_id;
     this.placesData.ItemSelected(this.Option_id, this.parent_option_id);
    for (let i = 0; i < value.length; i++) {
      if (value[i].label_id === isSelected) {
        this.valueSelected = value[i].value_id;
      }
    }
   this.selectedOption_id = value[0].option_id;
  }

   ItemSelect(option) {
    this.Option_id = option.option_id;
    this.parent_option_id = option.parent_option_id;
    this.placesData.ItemSelected(this.Option_id, this.parent_option_id);
  }

  newCount(price, extras) {
    this.extra = this.extra + ' 1x ' + extras;
    this.total +=  (+price);
    this.placesData.ItemCounter(++this.selectionCount);
    this.placesData.itemNameChange(this.item.name_en);
    this.placesData.totalPrice(this.total, this.extra);
  }

  checkBoxShow(max, extras, optionId) {
    if (optionId === this.checkboxOptionId || this.checkboxOptionId === 0) {
      this.extra = this.extra + ' 1x ' + extras;
      ++this.count;
      console.log(max, this.count, 'Here');
      this.checkboxOptionId = optionId;
      if (this.count > max) {
        console.log('Here now');
        this.checkboxOptionId = 0;
        this.count = 0;
        this.extra = ' ';
      }
    }
  }

  addToCart(a, b) {
    this.newCount( 0 , b);
    this.presentToast();
    console.log(this.placesData.Selected);
  }

}
