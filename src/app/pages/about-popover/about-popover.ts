import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://order.restomenu.com/privacy/policy')">
        <ion-label>Our Policy</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://order.restomenu.com/privacy/tos')">
        <ion-label>Terms & Conditions</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
      <ion-label>Review this app</ion-label>
    </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Frequently Asked Questions</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController, public router: Router, ) {}

  support() {
    this.router.navigateByUrl('/support');
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
