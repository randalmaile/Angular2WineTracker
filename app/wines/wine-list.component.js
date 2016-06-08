System.register(['@angular/core', '../pipes/table.pipe', '../shared/star.component', './wine.service', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, table_pipe_1, star_component_1, wine_service_1, router_deprecated_1;
    var WineListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_pipe_1_1) {
                table_pipe_1 = table_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (wine_service_1_1) {
                wine_service_1 = wine_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            WineListComponent = (function () {
                function WineListComponent(_wineService) {
                    this._wineService = _wineService;
                    this.pageTitle = "Wine Stash List";
                    this.newClass = "wineImage";
                    this.listFilter = "";
                    this.toggledIndex = null;
                } // inject the WineService in the constructor
                WineListComponent.prototype.toggleImage = function (idx) {
                    this.wines[idx].show = !this.wines[idx].show;
                };
                WineListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = "You clicked on:" + message.rating;
                };
                WineListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this is where you set your wines property by subscribing to the observables in the services
                    this._wineService.getWines()
                        .subscribe(function (wines) { return _this.wines = wines; }, // specifies an action to take when an observable emits an item (the parameter in the arrow IS the array of wines)
                    function (// specifies an action to take when an observable emits an item (the parameter in the arrow IS the array of wines)
                        error) { return _this.errorMessage = error; }); // executed if the observable fails
                };
                WineListComponent = __decorate([
                    core_1.Component({
                        selector: 'ws-wines',
                        templateUrl: 'app/wines/wine-list.component.html',
                        styleUrls: ['app/wines/wines.css'],
                        pipes: [table_pipe_1.TableFilterPipe],
                        directives: [star_component_1.StarComponent, router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [wine_service_1.WineService])
                ], WineListComponent);
                return WineListComponent;
            }());
            exports_1("WineListComponent", WineListComponent);
        }
    }
});
//# sourceMappingURL=wine-list.component.js.map