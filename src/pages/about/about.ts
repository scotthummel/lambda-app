import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticleDetail } from "../article-detail/article-detail";
import { Board } from "../board/board";
import { Sponsors } from "../sponsors/sponsors";
import { Developer } from "../developer/developer";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  public pages: Array<{title: string, id: number, component: any}>;

  constructor(public nav: NavController) {
    this.pages = [
      { title: 'Mission', id: 2, component: ArticleDetail },
      { title: 'History', id: 3, component: ArticleDetail },
      { title: 'By-Laws', id: 11, component: ArticleDetail },
      { title: 'Board', id: null, component: Board },
      { title: '501c3 Letter', id: 12, component: ArticleDetail },
      { title: 'Standards of Conduct', id: 10, component: ArticleDetail },
      { title: 'Sponsors', id: null, component: Sponsors },
      { title: 'Developer', id: null, component: Developer }
    ];
  }

  ionViewDidLoad() {
  }

  viewPage(component, pageId) {
    this.nav.push(component, pageId);
  }

}
