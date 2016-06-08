import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';
import { WineService } from './wine.service';
import { IWines } from './wines';
import { Observable } from 'rxjs/observable';

@Component({
    templateUrl: 'app/wines/wine-detail.component.html'
})
export class WineDetailComponent implements OnInit {
    pageTitle: string = "Wine Details";
    errorMessage: string;
    wine: Observable<IWines>;

    constructor(private _routeParams: RouteParams, private _router: Router, private _wineService: WineService) { }

    ngOnInit() {
        let routeId = +this._routeParams.get('id');
        this.pageTitle = this.pageTitle + " for wine: " + routeId;

        // NOW NEED TO CALL THE WINE SERVICE WITH THE ROUTEID - NEED TO BULID A SERVICE FOR THIS!!!

        // call get wine here!!!
        this.getWine(routeId);

    }

    getWine(id: number) {
        this.wine = this._wineService.getWine(id);
    }

    onBack() {
        window.history.back();
    }

}