import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-meetings-by-day',
  templateUrl: 'meetings-by-day.html'
})
export class MeetingsByDay {

  public meetings = [];

  public day = {};

  constructor(public navCtrl: NavController,
              public loadingController : LoadingController,
              public params : NavParams,
              public lambda: LambdaApi,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);
    let day = this.params.data;

    this.storage.get('day/' + day + '/' + today).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Meetings...'
        });

        loader.present().then(() => {
          this.lambda.getMeetingsByDay(day.abbreviation).subscribe(data => {
            this.meetings = data;
            this.day = day.full_name;
            this.storage.set('day/' + day + '/' + today, JSON.stringify(data));
            loader.dismiss();
          });
        });
      } else {
        this.meetings = JSON.parse(data);
        this.day = day.full_name;
      }
    });
  }
}
