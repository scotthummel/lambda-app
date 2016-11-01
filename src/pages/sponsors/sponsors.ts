import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html'
})
export class Sponsors {

  public sponsors = [];

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public lambda : LambdaApi,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);

    this.storage.get('sponsors/' + today).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Sponsors...'
        });

        loader.present().then(() => {
          this.lambda.getSponsors().subscribe(data => {
            this.sponsors = data;
            this.storage.set('sponsors/' + today, JSON.stringify(data));
            loader.dismiss();
          });
        });
      } else {
        this.sponsors = JSON.parse(data);
      }
    });
  }

}
