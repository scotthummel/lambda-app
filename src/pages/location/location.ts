import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Location page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class Location {

  constructor(public nav: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Location Page');
  }

}
