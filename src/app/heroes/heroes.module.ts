import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { HeroesComponent } from './heroes.component';

const routes: Routes = [
    { path: '', component: HeroesComponent },
  ];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CommonModule 
    ],
    declarations: [ HeroesComponent]
})

export class HeroesModule {

}