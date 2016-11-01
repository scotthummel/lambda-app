import { Component } from '@angular/core';
import { MenuController, LoadingController, Nav } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';
import { Location } from '../../pages/location/location';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {

  public articles : any;

  constructor(public menu: MenuController,
              public lambda: LambdaApi,
              public loadingController: LoadingController,
              public storage: Storage,
              public nav: Nav
  ) {
  }

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);

    this.storage.get('articles/' + today).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Articles...'
        });

        loader.present().then(() => {
          this.lambda.getArticles().subscribe(data => {
            this.articles = data;
            this.storage.set('articles/' + today, JSON.stringify(data));
            loader.dismiss();
          });
        });
      } else {
        this.articles = JSON.parse(data);
      }
    });
  }

  loadMap()
  {
    this.nav.push(Location);
  }

}
