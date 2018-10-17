import { HeroDetailModule } from './../hero-detail/hero-detail.module';
import { HeroesModule } from './../heroes/heroes.module';
import { PanelComponent } from './../panel/panel.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule ,ModuleWithProviders} from '@angular/core';

export function loadHeroesModule() { return HeroesModule; }
export function loadHeroDetailModule(){ return HeroDetailModule;}
const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent },
            { path: 'heroes', loadChildren: loadHeroesModule },      //懒加载模式
            { path: 'herodetail/:id', loadChildren: loadHeroDetailModule },    //懒加载模式
            { path: 'panel', component: PanelComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

