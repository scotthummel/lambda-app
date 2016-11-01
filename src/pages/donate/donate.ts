import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Donate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})
export class Donate {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Donate Page');
  }

}
