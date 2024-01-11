import { Component, OnInit } from '@angular/core';
import { TabModel } from './models/tab-model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CookieService],
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit{
  
  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  tabs: TabModel[] = [];
  cleantab: TabModel[] = [];
  myArray = [];
  rssUrls = ['https://www.analyticsvidhya.com/feed/',
             'https://www.lebigdata.fr/feed',
             'https://blog.cellenza.com/feed',
             'https://www.datavirtualizationblog.com/feed',
             'https://blog.revolve.team/tag/big-data/feed',
             'https://www.illustradata.com/feed/',
             'https://neptune.ai/blog/feed',
             'https://blog.octo.com/feed',
             'https://towardsdatascience.com/feed',
             'https://xebia.com/blog/feed/'];
             
  ngOnInit() {
    this.getRSSFeeds();
  }

  getRSSFeeds() {
    this.rssUrls.forEach((url) => {
      this.http.get(url, { responseType: 'text' }).subscribe((data: any) => {
        const parser = new xml2js.Parser({ strict: false, trim: true });
        parser.parseString(data, (err: any, result: any) => {
          const items = result.RSS.CHANNEL[0].ITEM;
          items.forEach((item: any) => {
            let DateTarget = new Date(Date.now());
            DateTarget.setDate(DateTarget.getDate()-31);
            let ItemDate = new Date(item.PUBDATE);
            if(ItemDate >= DateTarget){
              const title = item.TITLE;
              const pubDate = ItemDate;
              const link = item.LINK;
              const tab = new TabModel(title, pubDate, false, link);
              if(this.cookie.get(title+pubDate) == 'read'){
                tab.read = true;
              }
              this.cleantab.push(tab);
              this.cleantab = this.cleantab.sort((a, b) => b.dateobj.getTime() - a.dateobj.getTime());
            }
          });
          this.tabs = this.cleantab;
        });
      });
    });
  }
}