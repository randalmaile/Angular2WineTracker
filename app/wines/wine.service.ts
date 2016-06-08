import { Injectable } from '@angular/core';
import { IWines } from './wines';
import { Http, Response } from '@angular/http'; // HTTP client service and HTTP response
import { Observable } from 'rxjs/observable';
@Injectable() // need this to inject the http service (in constructor) in this class

export class WineService {
    // define constant - url to the webserver
    private _wineUrl = 'api/wines/wines.json';

    constructor(private _http: Http) { } // use the client HTTP service


    // use the generic feature of Observable to define the type of data we are observing
    getWines(): Observable<IWines[]> {
        return this._http.get(this._wineUrl)
            .map((response: Response) => <IWines[]>response.json())
            .catch(this._handleError);
    }

    getWine(wineId: number): Observable<IWines> {
        return this.getWines()
                .map((wines: IWines[]) => wines.find(w => w.productId === wineId))// log data to the console for debuging
                .do(data => console.log('All: ' + JSON.stringify(data)));
    }

    private _handleError(error: Response) {
            console.log(error);
            return Observable.throw(error.json().error || "server error");
    }


}