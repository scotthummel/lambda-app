import { Component } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { MeetingsByDay } from "../meetings-by-day/meetings-by-day";

/*
  Generated class for the Days page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-days',
  templateUrl: 'days.html'
})
export class Days {

  public days = [];

  constructor(public nav: Nav, public navCtrl: NavController) {
    this.days = [
      {
        abbreviation : 'sun',
        full_name : 'Sunday'
      },
      {
        abbreviation : 'mon',
        full_name : 'Monday'
      },
      {
        abbreviation : 'tue',
        full_name : 'Tuesday'
      },
      {
        abbreviation : 'wed',
        full_name : 'Wednesday'
      },
      {
        abbreviation : 'thu',
        full_name : 'Thursday'
      },
      {
        abbreviation : 'fri',
        full_name : 'Friday'
      },
      {
        abbreviation : 'sat',
        full_name : 'Saturday'
      }
    ]
  }

  ionViewDidLoad() {
  }

  getDay(day)
  {
    this.nav.push(MeetingsByDay, day);
  }
}
