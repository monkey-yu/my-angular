import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NgxDnDModule } from '@swimlane/ngx-dnd'; 
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import {HeroesComponent} from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroDetailComponent,
    // HeroesComponent,
    DashboardComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    NgxDnDModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
