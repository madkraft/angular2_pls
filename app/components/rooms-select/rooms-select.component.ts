import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rooms-select',
    styles: [`
        .rooms-select {
            padding: 10px;
            background: #aaa;
        }
    `],
    template: `
        <div class="rooms-select">
            <div class="room-header">
                Room {{ index }}
                <a href="0#"
                    [ngClass]="{hidden: index === 1 ? true : false}"
                    (click)="removeRoom.emit()">
                    Remove
                </a>
            </div>
            <counter 
                [startValue]="startValueAdults"
                [label]="labelAdults">
            </counter>
            <counter
                [startValue]="startValueKids"
                [label]="labelKids"
                (counterChange)="onCounterChange($event)">
            </counter>
            <children [kids]="children"></children>
        </div>
    `
})

export class RoomsSelectComponent {
    children: any = [
        {age: 4},
        {age: 12}
    ];
    startValueAdults: number = 1;
    startValueKids: number = this.children.length;
    labelAdults: string = 'Adults';
    labelKids: string = 'Children';

    @Input()
    index: number;

    @Output()
    removeRoom = new EventEmitter();

    onCounterChange (event: any) {
        if (event.type === 'inc') {
            this.children = [...this.children, {age: 1}];
        } else {
            this.children = this.children.slice(0, -1);
        }
    }
}
