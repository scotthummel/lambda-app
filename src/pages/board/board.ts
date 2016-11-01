import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-board',
  templateUrl: 'board.html'
})
export class Board {

  public board = [];

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              public lambda: LambdaApi,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get('board').then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Board...'
        });

        loader.present().then(() => {
          this.lambda.getBoard().subscribe(data => {
            this.board = data;
            this.storage.set('board', JSON.stringify(data));
            loader.dismiss();
          });
        });
      } else {
        this.board = JSON.parse(data);
      }
    });
  }

}
