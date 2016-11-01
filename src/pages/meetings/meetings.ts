import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";

/*
  Generated class for the Meetings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-meetings',
  templateUrl: 'meetings.html'
})
export class Meetings {

  public fellowship = [];
  public meetings = [];

  constructor(public nav: NavController, public params: NavParams, public lambda: LambdaApi, public loadingController : LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Meetings...'
    });

    loader.present().then(() => {
      let selectedFellowship = this.params.data;

      this.lambda.getFellowshipById(selectedFellowship.fellowship_id).subscribe(data => {
        this.fellowship = data;
      });

      this.lambda.getMeetingsByFellowship(selectedFellowship.slug).subscribe(data => {
        this.meetings = data;
        loader.dismiss();
      });

    });

  }

}
