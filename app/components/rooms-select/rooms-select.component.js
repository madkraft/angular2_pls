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
var RoomsSelectComponent = (function () {
    function RoomsSelectComponent() {
        this.children = [
            { age: 4 },
            { age: 12 }
        ];
        this.startValueAdults = 1;
        this.startValueKids = this.children.length;
        this.labelAdults = 'Adults';
        this.labelKids = 'Children';
        this.removeRoom = new core_1.EventEmitter();
    }
    RoomsSelectComponent.prototype.onCounterChange = function (event) {
        if (event.type === 'inc') {
            this.children = this.children.concat([{ age: 1 }]);
        }
        else {
            this.children = this.children.slice(0, -1);
        }
    };
    return RoomsSelectComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoomsSelectComponent.prototype, "index", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RoomsSelectComponent.prototype, "removeRoom", void 0);
RoomsSelectComponent = __decorate([
    core_1.Component({
        selector: 'rooms-select',
        styles: ["\n        .rooms-select {\n            padding: 10px;\n            background: #aaa;\n        }\n    "],
        template: "\n        <div class=\"rooms-select\">\n            <div class=\"room-header\">\n                Room {{ index }}\n                <a href=\"0#\"\n                    [ngClass]=\"{hidden: index === 1 ? true : false}\"\n                    (click)=\"removeRoom.emit()\">\n                    Remove\n                </a>\n            </div>\n            <counter \n                [startValue]=\"startValueAdults\"\n                [label]=\"labelAdults\">\n            </counter>\n            <counter\n                [startValue]=\"startValueKids\"\n                [label]=\"labelKids\"\n                (counterChange)=\"onCounterChange($event)\">\n            </counter>\n            <children [kids]=\"children\"></children>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], RoomsSelectComponent);
exports.RoomsSelectComponent = RoomsSelectComponent;
//# sourceMappingURL=rooms-select.component.js.map