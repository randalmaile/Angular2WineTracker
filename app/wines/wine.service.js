System.register(['@angular/core', '@angular/http', 'rxjs/observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, observable_1;
    var WineService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            }],
        execute: function() {
            WineService = (function () {
                function WineService(_http) {
                    this._http = _http;
                    // define constant - url to the webserver
                    this._wineUrl = 'api/wines/wines.json';
                } // use the client HTTP service
                // use the generic feature of Observable to define the type of data we are observing
                WineService.prototype.getWines = function () {
                    return this._http.get(this._wineUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this._handleError);
                };
                WineService.prototype.getWine = function (wineId) {
                    return this.getWines()
                        .map(function (wines) { return wines.find(function (w) { return w.productId === wineId; }); }) // log data to the console for debuging
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
                };
                WineService.prototype._handleError = function (error) {
                    console.log(error);
                    return observable_1.Observable.throw(error.json().error || "server error");
                };
                WineService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WineService);
                return WineService;
            }());
            exports_1("WineService", WineService);
        }
    }
});
//# sourceMappingURL=wine.service.js.map