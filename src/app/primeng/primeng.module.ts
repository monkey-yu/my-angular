import { PrimengComponent } from './primeng.component';
import { TableComponent } from './../table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

// routes
export const ROUTES: Routes = [
    {
        path: '', 
        component: PrimengComponent,
        children:[
            {path: '', redirectTo: 'table', pathMatch: 'full'},            
           { path: 'table', component: TableComponent},
        ]
    }
  ];
@NgModule({
    declarations: [
        PrimengComponent,
        TableComponent
    ],
    imports: [ 
        CommonModule,
        
        RouterModule.forChild(ROUTES),
     ],
    exports: [],
    providers: [],
})
export class PrimengModule {}