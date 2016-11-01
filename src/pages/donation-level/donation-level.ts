import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the DonationLevel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donation-level',
  templateUrl: 'donation-level.html'
})
export class DonationLevel {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DonationLevel Page');
  }

}
