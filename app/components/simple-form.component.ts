import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'simple-form',
    template: `
        <div>
            {{ message }}
            <input #myInput type="text" [(ngModel)]="message" />
            <button (click)="onClick($event, myInput.value)" >
                Click
            </button>
            <button (click)="myUpdate.emit({text: message})" >
                Click to emit
            </button>
        </div>
    `
})

export class SimpleFormComponent {
    @Input() message;
    @Output() myUpdate = new EventEmitter();

    onClick (event, value) {
        console.log(event);
        console.log(value);
    }
}
