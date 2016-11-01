import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html'
})
export class ArticleDetail {

  public article = {};

  constructor(public nav: NavController,
              public loadingController: LoadingController,
              public lambda: LambdaApi,
              public params: NavParams,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    let selectedArticleId = this.params.data;

    this.storage.get('article/' + selectedArticleId).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Article...'
        });

        loader.present().then(() => {
          this.lambda.getArticleById(selectedArticleId).subscribe(data => {
            this.storage.set('article/' + selectedArticleId, JSON.stringify(data));
            this.article = data;
            loader.dismiss();
          });
        });
      } else {
        this.article = JSON.parse(data);
      }
    });
  }

}
