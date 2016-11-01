import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Meetings } from "../meetings/meetings";

/*
  Generated class for the Fellowships page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fellowships',
  templateUrl: 'fellowships.html'
})
export class Fellowships {

  public fellowships : any;

  constructor(public menu: MenuController,
              public nav: NavController,
              public lambda: LambdaApi,
              public params: NavParams,
              public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Fellowships...'
    });

    loader.present().then(() => {
      this.lambda.getFellowships().subscribe(data => {
        this.fellowships = data;
        loader.dismiss();
      });
    });
  }

  viewFellowship(fellowship) {
    this.nav.push(Meetings, fellowship);
  }

}
