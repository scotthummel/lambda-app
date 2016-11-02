import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Developer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-developer',
  templateUrl: 'developer.html'
})
export class Developer {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Developer Page');
  }

}
