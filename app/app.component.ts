import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'pm-app',
    template: `
        <button (click)="click$.next()" >Update</button>
        <h1>{{ clock | async | date:'y MMMM EEEE dd j mm ss' }}</h1>
    `
})

class AppComponent {
    clock;
    click$ = new Subject();

    constructor () {
        this.clock = Observable.merge(
            this.click$,
            Observable.interval(5000)
        ).map(() => new Date());
    }
}

export { AppComponent };
