import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Join page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-join',
  templateUrl: 'join.html'
})
export class Join {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Join Page');
  }

}
