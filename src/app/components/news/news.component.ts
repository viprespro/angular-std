import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  title = '我是一个新闻组件';

  public userInfo: object = {
    username: 'Ares',
    age: '26',
  };

  public arr: string[] = ['1', '2', '3'];

  public flag: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
