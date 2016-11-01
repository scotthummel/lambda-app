import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";

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
  ) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Article...'
    });

    loader.present().then(() => {
      let selectedArticleId = this.params.data;

      this.lambda.getArticleById(selectedArticleId).subscribe(data => {
        this.article = data;
        loader.dismiss();
      });
    });
  }

}
