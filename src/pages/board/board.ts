import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";

@Component({
  selector: 'page-board',
  templateUrl: 'board.html'
})
export class Board {

  public board = [];

  constructor(public navCtrl: NavController, public loadingController: LoadingController, public lambda: LambdaApi) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Board...'
    });

    loader.present().then(() => {
      this.lambda.getBoard().subscribe(data => {
        this.board = data;
        loader.dismiss();
      });
    });
  }

}
