import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-meetings',
  templateUrl: 'meetings.html'
})
export class Meetings {

  public fellowship = [];
  public meetings = [];

  constructor(public nav: NavController,
              public params: NavParams,
              public lambda: LambdaApi,
              public loadingController : LoadingController,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);

    let selectedFellowship = this.params.data;

    this.storage.get('meetings/' + selectedFellowship.slug + '/' + today).then((data) => {

      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Meetings...'
        });

        this.lambda.getFellowshipById(selectedFellowship.fellowship_id).subscribe(data => {
          this.storage.set('fellowship-details/' + selectedFellowship.slug + '/' + today, JSON.stringify(data));
          this.fellowship = data;
        });

        this.lambda.getMeetingsByFellowship(selectedFellowship.slug).subscribe(data => {
          this.meetings = data;
          this.storage.set('meetings/' + selectedFellowship.slug + '/' + today, JSON.stringify(data));
          loader.dismiss();
        });
      } else {
        this.storage.get('fellowship-details/' + selectedFellowship.slug + '/' + today).then((data) => {
          this.fellowship = JSON.parse(data);
        });

        this.meetings = JSON.parse(data);
      }
    });

  }

}
