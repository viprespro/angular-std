// 核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';

// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

// 装饰器 当做一个方法 接受一个元数据对象
@NgModule({
  declarations: [
    // 配置当前项目运行的组件
    AppComponent,
    NewsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, // 项目所需的服务
    FormsModule,
  ],
  providers: [], // 项目需要的服务
  bootstrap: [AppComponent], // 指定应用的主视图 通过引导AppModule来启动应用 一般写根组件
})

// 跟模块不需要到处任何东西
export class AppModule {}
