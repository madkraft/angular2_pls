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
var AppComponent = (function () {
    function AppComponent() {
        // create unique id
        this.rooms = [
            { id: 0 }
        ];
    }
    AppComponent.prototype.onAddRoom = function () {
        this.rooms = this.rooms.concat([{ id: this.rooms.length, adults: 1, children: 0 }]);
    };
    AppComponent.prototype.onRemoveRoom = function (id) {
        this.rooms = this.rooms.filter(function (room) { return room.id !== id; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <rooms-select \n            *ngFor=\"let room of rooms; let i = index;\" \n            [index]=\"i+1\"\n            (removeRoom)=\"onRemoveRoom(room.id)\">\n        </rooms-select>\n        <button (click)=\"onAddRoom()\">Add room</button>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map