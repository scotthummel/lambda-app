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
import { Join } from "../pages/join/join";
import { Login } from "../pages/login/login";
import { MeetingsByDay } from "../pages/meetings-by-day/meetings-by-day";
import { Storage } from '@ionic/storage';


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
    MeetingsByDay
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    MeetingsByDay
  ],
  providers: [ Storage ]
})
export class AppModule {}
