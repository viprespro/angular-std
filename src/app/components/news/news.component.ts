import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  public listFromServe: any[] = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {}

  // http request.
  fetchData() {
    const api = 'http://a.itying.com/api/productlist';
    // rxjs
    this.http.get(api).subscribe(({ result }: any) => {
      console.log('result:', result);
      this.listFromServe = result;
    });
  }

  doPost() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const postApi = '';
    this.http
      .post(postApi, { username: 'ares' }, httpOptions)
      .subscribe((res) => {
        console.log('res:', res);
      });
    console.log(123);
  }
}
