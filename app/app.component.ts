import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from '@angular/router-deprecated'; // minimal requirement for routing to work
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features


 // Components
import { WineListComponent } from './wines/wine-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WineService } from './wines/wine.service';
import { WineDetailComponent } from './wines/wine-detail.component';


@Component({
    //moduleId: module.id,
    selector: 'ws-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES], // must have for routing to work
    providers: [ROUTER_PROVIDERS, WineService, HTTP_PROVIDERS] // must have for routing to work
        
})

@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/wines', name: 'Wines', component: WineListComponent },
    { path: '/wine/:id', name: 'WineDetail', component: WineDetailComponent },
])

export class AppComponent implements OnInit {

    pageTitle: string = "Wine Stash";

    constructor() { }

    ngOnInit() { }

}