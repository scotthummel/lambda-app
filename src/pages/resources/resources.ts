import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LambdaApi } from "../../shared/lambda-api.service";
import { Storage } from '@ionic/storage';

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
              public loadingController: LoadingController,
              public storage: Storage
  ) {}

  ionViewDidLoad() {
    var today = new Date().toISOString().slice(0, 10);
    let selectedCategory = this.params.data;

    this.storage.get('resources/' + selectedCategory.category_id + '/' + today).then((data) => {
      if (!data) {
        let loader = this.loadingController.create({
          content: 'Loading Resource...'
        });

        loader.present().then(() => {
          this.lambda.getResourcesByCategoryId(selectedCategory.category_id).subscribe(data => {
            this.resources = data;
            this.storage.set('resources/' + selectedCategory.category_id + '/' + today, JSON.stringify(data));
            loader.dismiss();
          });

          this.lambda.getResourceCategoryById(selectedCategory.category_id).subscribe(data => {
            this.storage.set('resource-category/' + selectedCategory.category_id + '/' + today, JSON.stringify(data));
            this.resourceCategory = data;
          })
        });
      } else {
        this.resources = JSON.parse(data);
        this.storage.get('resource-category/' + selectedCategory.category_id + '/' + today).then((data) => {
          this.resourceCategory = JSON.parse(data);
        });
      }
    });

  }

}
