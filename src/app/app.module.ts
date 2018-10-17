
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

// 项目内 模块
import { InMemoryDataService }  from './in-memory-data.service';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';
import { HeroService } from './heroes/hero.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    AccordionModule,
    
    MainModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
