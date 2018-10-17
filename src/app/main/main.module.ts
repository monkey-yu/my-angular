import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDnDModule } from '@swimlane/ngx-dnd'; 

import { PanelComponent } from './../panel/panel.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
    declarations: [
        MainComponent,
        DashboardComponent,
        PanelComponent
    ],
    imports: [ 
        CommonModule,
        NgxDnDModule,
        FormsModule,
        MainRoutingModule,
     ],
    exports: [],
    providers: [],
})
export class MainModule {}