import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class Location {
  lat: number = 33.476396;
  lng: number = -112.047792;
  zoom: number = 15;
  address = '2622 North 16th Street<br />(at Virginia Avenue)<br />Phoenix, AZ 85006';

  constructor(public navCtrl: NavController) {

  }

}


