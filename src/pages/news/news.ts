import { Component } from '@angular/core';
import { MenuController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {

  public articles : any;

  constructor(public menu: MenuController,
              public lambda: LambdaApi,
              public loadingController: LoadingController,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Articles...'
    });

    loader.present().then(() => {
      this.storage.get('articles').then((data) => {
        if (!data) {
          this.lambda.getArticles().subscribe(data => {
            this.articles = data;
            this.storage.set('articles', JSON.stringify(data));
            loader.dismiss();
          });
        } else {
            this.articles = JSON.parse(data);
            loader.dismiss();
        }
      });

    });
  }

}
