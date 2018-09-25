import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';

const routes:Routes = [
    { path:'',redirectTo:'/dashboard',pathMatch:'full'},
    { path: 'dashboard',component:DashboardComponent},
    { path:'heroes',component:HeroesComponent },
    { path:'herodetail/:id',component:HeroDetailComponent},
    { path:'panel',component:PanelComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}