import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
/***
 * @Component 装饰器 ,用于为该组件指定 Angular 所需的元数据。
 * selector:组件的选择器（CSS 元素选择器）
 * templateUrl— 组件模板文件的位置
 * styleUrls— 组件私有 CSS 样式表文件的位置。
 */ 
@Component({
  //CSS 元素选择器 app-heroes 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
//export : 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。
export class HeroesComponent implements OnInit {
  //HeroesComponent 中添加一个 hero 属性
  hero:Hero = {
    id:1,
    name:'Windstorm'
  };
  heroes = HEROES;
  constructor() { }
  //ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
  ngOnInit(): void {
  }
  //点击的hero
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
