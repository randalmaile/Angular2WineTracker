import { Component, OnInit } from '@angular/core';
import { TableFilterPipe } from '../pipes/table.pipe';
import { IWines } from './wines';
import { StarComponent } from '../shared/star.component';
import { IRating } from '../shared/rating';
import { WineService } from './wine.service'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'ws-wines',
    templateUrl: 'app/wines/wine-list.component.html',
    styleUrls: ['app/wines/wines.css'],
    pipes: [TableFilterPipe],// decorate pipes with your custom pipes if you want to use them!!!!
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class WineListComponent implements OnInit {
    pageTitle: string = "Wine Stash List";
    newClass: string = "wineImage";
    listFilter: string = "";
    toggledIndex: number = null;
    wines: IWines[];
    errorMessage: string;


    constructor(private _wineService: WineService) {

    } // inject the WineService in the constructor

    toggleImage(idx): void {
        this.wines[idx].show = !this.wines[idx].show;
    }

    onRatingClicked(message: IRating): void {
        this.pageTitle = "You clicked on:" + message.rating;
    }

    ngOnInit() {
        // this is where you set your wines property by subscribing to the observables in the services
        this._wineService.getWines() 
            .subscribe(
                wines => this.wines = wines, // specifies an action to take when an observable emits an item (the parameter in the arrow IS the array of wines)
                error => this.errorMessage = <any>error);  // executed if the observable fails
    }
}