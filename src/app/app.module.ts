import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { News } from "../pages/news/news";
import { Fellowships } from "../pages/fellowships/fellowships";
import { Meetings } from "../pages/meetings/meetings";
import { ResourceCategories } from "../pages/resource-categories/resource-categories";
import { Resources } from "../pages/resources/resources";
import { About } from "../pages/about/about";
import { Days } from "../pages/days/days";
import { ArticleDetail } from "../pages/article-detail/article-detail";
import { Sponsors } from "../pages/sponsors/sponsors";
import { Board } from "../pages/board/board";
import { Location } from "../pages/location/location";
import { Contact } from "../pages/contact/contact";
import { Join } from "../pages/join/join";
import { Login } from "../pages/login/login";
import { MeetingsByDay } from "../pages/meetings-by-day/meetings-by-day";
import { Storage } from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Developer } from "../pages/developer/developer";
import { Membership } from "../pages/membership/membership";

@NgModule({
  declarations: [
    MyApp,
    News,
    Fellowships,
    Meetings,
    ResourceCategories,
    Resources,
    About,
    Days,
    ArticleDetail,
    Sponsors,
    Board,
    Location,
    Join,
    Login,
    MeetingsByDay,
    Contact,
    Developer,
    Membership
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAne24K9sNL4LifyDlMLya-S-hI-Cw7nWs'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    News,
    Fellowships,
    Meetings,
    ResourceCategories,
    Resources,
    About,
    Days,
    ArticleDetail,
    Sponsors,
    Board,
    Location,
    Join,
    Login,
    MeetingsByDay,
    Contact,
    Developer,
    Membership
  ],
  providers: [ Storage ]
})
export class AppModule {}
