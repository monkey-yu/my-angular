import { NgModule,ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
// 项目内 模块
import { MainModule } from './main/main.module';
import { PrimengModule } from './primeng/primeng.module';


export function loadMainModule(){ return MainModule;}
export function loadPrimengModule(){ return PrimengModule;}
const routes:Routes = [
    { path:'',redirectTo:'main',pathMatch:'full'},
    { path: 'main',loadChildren:loadMainModule},
    { path: 'primeng',loadChildren:loadPrimengModule},
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
