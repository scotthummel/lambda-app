import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";

/*
  Generated class for the MeetingsByDay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-meetings-by-day',
  templateUrl: 'meetings-by-day.html'
})
export class MeetingsByDay {

  public meetings = [];

  public day = {};

  constructor(public navCtrl: NavController, public loadingController : LoadingController, public params : NavParams, public lambda: LambdaApi) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Meetings...'
    });

    loader.present().then(() => {
      let day = this.params.data;

      this.lambda.getMeetingsByDay(day.abbreviation).subscribe(data => {
        this.meetings = data;
        this.day = day.full_name;
        loader.dismiss();
      });
    });
  }

}
