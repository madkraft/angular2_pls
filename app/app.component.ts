import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <rooms-select 
            *ngFor="let room of rooms; let i = index;" 
            [index]="i+1"
            (removeRoom)="onRemoveRoom(room.id)">
        </rooms-select>
        <button (click)="onAddRoom()">Add room</button>
    `
})

export class AppComponent {
    // create unique id
    rooms: Array<any> = [
        {id: 0}
    ];

    onAddRoom () {
        this.rooms = [...this.rooms, {id: this.rooms.length, adults: 1, children: 0}];
    }

    onRemoveRoom (id: number) {
        this.rooms = this.rooms.filter(room => room.id !== id)
    }
}
