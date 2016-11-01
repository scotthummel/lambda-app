import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Resources } from "../resources/resources";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-resource-categories',
  templateUrl: 'resource-categories.html'
})
export class ResourceCategories {

  public categories = [];

  constructor(public nav: NavController,
              public loadingController: LoadingController,
              public lambda: LambdaApi,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);

    this.storage.get('categories/' + today).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Resources...'
        });

        loader.present().then(() => {
          this.lambda.getResourceCateogries().subscribe(data => {
            this.categories = data;
            this.storage.set('categories/' + today, JSON.stringify(data));
            loader.dismiss();
          });
        });
      } else {
        this.categories = JSON.parse(data);
      }
    });
  }

  viewResources(category)
  {
    this.nav.push(Resources, category);
  }
}
