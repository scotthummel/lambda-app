import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { News } from "../pages/news/news";
import { Fellowships } from "../pages/fellowships/fellowships";
import { HttpModule } from '@angular/http';
import { LambdaApi } from '../shared/shared';
import { ResourceCategories } from "../pages/resource-categories/resource-categories";
import { About } from "../pages/about/about";
import { Days } from "../pages/days/days";
import { Location } from "../pages/location/location";
import { Join } from "../pages/join/join";
import { Login } from "../pages/login/login";


@Component({
  templateUrl: 'app.html',
  providers : [
      LambdaApi,
      HttpModule
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = News;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    this.menuActive();

    this.pages = [
      { title: 'Home', component: News },
      { title: 'About', component: About },
      { title: 'Fellowships', component: Fellowships },
      { title: 'Days', component: Days },
      { title: 'Resources', component: ResourceCategories },
      { title: 'Location', component: Location },
      { title: 'Join', component: Join },
      { title: 'Login', component: Login }
    ];

  }

  menuActive() {
    this.menu.enable(true);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
