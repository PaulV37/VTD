import { Component, OnInit, Input } from '@angular/core';
import { TabModel } from '../models/tab-model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vtm-tab',
  templateUrl: './vtm-tab.component.html',
  providers: [CookieService],
  styleUrl: './vtm-tab.component.css'
})
export class VtmTabComponent implements OnInit{
  @Input() tab!: TabModel;

  constructor(private cookie: CookieService) {}

  ngOnInit(){}

  onChangeTab(link: string, title: string, date: Date){
    window.open(link, '_blank');
    this.cookie.set(title + date, 'read');
    this.tab.read = true;
  }
}
