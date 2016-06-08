System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', 'rxjs/Rx', './wines/wine-list.component', './dashboard/dashboard.component', './wines/wine.service', './wines/wine-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, http_1, wine_list_component_1, dashboard_component_1, wine_service_1, wine_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (wine_list_component_1_1) {
                wine_list_component_1 = wine_list_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (wine_service_1_1) {
                wine_service_1 = wine_service_1_1;
            },
            function (wine_detail_component_1_1) {
                wine_detail_component_1 = wine_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Wine Stash";
                }
                AppComponent.prototype.ngOnInit = function () { };
                AppComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'ws-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, wine_service_1.WineService, http_1.HTTP_PROVIDERS] // must have for routing to work
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/wines', name: 'Wines', component: wine_list_component_1.WineListComponent },
                        { path: '/wine/:id', name: 'WineDetail', component: wine_detail_component_1.WineDetailComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map