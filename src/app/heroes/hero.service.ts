import { Injectable } from '@angular/core';

import {HEROES} from './mock-heroes';
export class Hero{
    name:string;
    id:number;
  };
@Injectable()
export class HeroService {
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve =>{
        setTimeout(() => resolve(this.getHeroes()),2000);
    })
    }
    getHero(id:number):Promise<Hero>{
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id))
    }
}