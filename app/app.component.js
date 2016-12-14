"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/merge");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var AppComponent = (function () {
    function AppComponent() {
        this.click$ = new Subject_1.Subject();
        this.clock = Observable_1.Observable.merge(this.click$, Observable_1.Observable.interval(5000)).map(function () { return new Date(); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <button (click)=\"click$.next()\" >Update</button>\n        <h1>{{ clock | async | date:'y MMMM EEEE dd j mm ss' }}</h1>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map