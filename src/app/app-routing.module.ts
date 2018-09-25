import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';

const routes:Routes = [
    { path:'',redirectTo:'/dashboard',pathMatch:'full'},
    { path: 'dashboard',component:DashboardComponent},
    { path:'heroes',loadChildren:'./heroes/heroes.module#HeroesModule' },
    { path:'herodetail/:id',loadChildren:'./hero-detail/hero-detail.module#HeroDetailModule'},
    { path:'panel',component:PanelComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}