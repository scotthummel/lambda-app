import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Resources } from "../resources/resources";

@Component({
  selector: 'page-resource-categories',
  templateUrl: 'resource-categories.html'
})
export class ResourceCategories {

  public categories = [];

  constructor(public nav: NavController, public loadingController: LoadingController, public lambda: LambdaApi) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading Resources...'
    });

    loader.present().then(() => {
      this.lambda.getResourceCateogries().subscribe(data => {
        this.categories = data;
        loader.dismiss();
      });
    });
  }

  viewResources(category)
  {
    this.nav.push(Resources, category);
  }
}
