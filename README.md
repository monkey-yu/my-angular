该项目是基于AngularTourOfHeroes（ng官网入门教程）项目开始的。

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

该项目的更新及记录：（此处版本记录仅作为我的开发历程）

v1.0： 学习并创建 英雄列表 项目。

v1.1: 将该项目中原本使用的css 修改为使用scss。

v1.2: 安装ngx-dnd 模块，预备后续做拖拽功能。

v1.3: 将同一组件内容放在同一文件夹内。

v1.4: 实现懒加载模块的功能(保留dashboard页未使用懒加载，以作对比)。 

  以heroes 页为例： （1）添加heroes.module.ts文件导出HeroesModule ; (2)app-routing 页去掉heroesComponent的引入，将url后的配置改为 loadChildren ; (3) 将app.module 页的heroesComponent 注释，不需要declartion. 

v1.5: 添加panel页，实现拖拽功能。并且安装了primeng 和font-awesome插件。 
  参考链接https://github.com/swimlane/ngx-dnd/blob/master/projects/swimlane/ngx-dnd/src/lib/components/item/item.component.ts
