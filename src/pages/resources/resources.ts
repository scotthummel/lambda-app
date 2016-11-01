import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";

/*
  Generated class for the Resources page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class Resources {

  public resources = [];

  public resourceCategory = [];

  constructor(public nav: NavController,
              public params: NavParams,
              public lambda: LambdaApi,
              public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Resource...'
    });

    loader.present().then(() => {
      let selectedCategory = this.params.data;

      this.lambda.getResourcesByCategoryId(selectedCategory.category_id).subscribe(data => {
        this.resources = data;
        loader.dismiss();
      });

      this.lambda.getResourceCategoryById(selectedCategory.category_id).subscribe(data => {
        this.resourceCategory = data;
      })
    });
  }

}
