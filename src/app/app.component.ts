import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink = "/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink = "/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink ="/panel" routerLinkActive="active" >Panel</a>
    </nav>
    <router-outlet></router-outlet>  
    `,
    styleUrls: ['./app.component.scss']
})

export class AppComponent{
    title = 'Tour of Heroes';
}
