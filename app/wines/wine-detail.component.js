System.register(['@angular/core', '@angular/router-deprecated', './wine.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, router_deprecated_2, wine_service_1;
    var WineDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
            },
            function (wine_service_1_1) {
                wine_service_1 = wine_service_1_1;
            }],
        execute: function() {
            WineDetailComponent = (function () {
                function WineDetailComponent(_routeParams, _router, _wineService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._wineService = _wineService;
                    this.pageTitle = "Wine Details";
                }
                WineDetailComponent.prototype.ngOnInit = function () {
                    var routeId = +this._routeParams.get('id');
                    this.pageTitle = this.pageTitle + " for wine: " + routeId;
                    // NOW NEED TO CALL THE WINE SERVICE WITH THE ROUTEID - NEED TO BULID A SERVICE FOR THIS!!!
                    // call get wine here!!!
                    this.getWine(routeId);
                };
                WineDetailComponent.prototype.getWine = function (id) {
                    this.wine = this._wineService.getWine(id);
                };
                WineDetailComponent.prototype.onBack = function () {
                    window.history.back();
                };
                WineDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/wines/wine-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_2.Router, wine_service_1.WineService])
                ], WineDetailComponent);
                return WineDetailComponent;
            }());
            exports_1("WineDetailComponent", WineDetailComponent);
        }
    }
});
//# sourceMappingURL=wine-detail.component.js.map