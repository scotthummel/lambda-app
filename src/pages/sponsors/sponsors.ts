import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";

/*
  Generated class for the Sponsors page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html'
})
export class Sponsors {

  public sponsors = [];

  constructor(public navCtrl: NavController, public loadingController: LoadingController, public lambda : LambdaApi) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Sponsors...'
    });

    loader.present().then(() => {
      this.lambda.getSponsors().subscribe(data => {
        this.sponsors = data;
        loader.dismiss();
      });

    });

  }

}
