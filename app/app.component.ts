import { Component, Inject } from '@angular/core';
import { MailService } from './services/mail.service';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            {{ api }}
            <hr>

            <ul>
                <li *ngFor="let message of mail.messages">
                    {{ message.text }}
                </li>
            </ul>

            <simple-form 
                *ngFor="let message of mail.messages"
                [message]="message.text"
                (myUpdate)="onUpdate(message.id, $event.text)"
                >
            </simple-form>
        </div>
    `
})

export class AppComponent {
    constructor (
        private mail: MailService,
        @Inject('api') private api
    ) {

    }

    onUpdate (id, text) {
        this.mail.update(id, text);
    }
}
