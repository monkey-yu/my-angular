import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';

import { Router} from '@angular/router';
import {HeroService} from './hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers:[HeroService]
})

export class HeroesComponent implements OnInit{ 
  constructor(
    private heroService:HeroService,
    private router:Router
  ){}
  
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
  ngOnInit():void{
    this.getHeroes();
  }
  gotoDetail(){
    this.router.navigate(['/herodetail',this.selectedHero.id]);
  }
} 
