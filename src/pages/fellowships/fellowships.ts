import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Meetings } from "../meetings/meetings";
import { Storage } from '@ionic/storage';

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
              public loadingController: LoadingController,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);

    this.storage.get('fellowships/' + today).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Fellowships...'
        });

        this.lambda.getFellowships().subscribe(data => {
          this.storage.set('fellowships/' + today, JSON.stringify(data));
          this.fellowships = data;
          loader.dismiss();
        });
      } else {
        this.fellowships = JSON.parse(data);
      }
    });
  }

  viewFellowship(fellowship) {
    this.nav.push(Meetings, fellowship);
  }

}
