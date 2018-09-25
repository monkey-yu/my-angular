import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    { path: '', component: HeroDetailComponent },
  ];
@NgModule({
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ],
    declarations: [ HeroDetailComponent]
})

export class HeroDetailModule {

}