import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    {id: 0, text: `You're now friends`},
    {id: 1, text: 'You have a mail'},
    {id: 2, text: 'Hello world!'}
  ];

  constructor() {}

  update (id: number, text: string) {
    this.messages = this.messages.map(message => {
      if (message.id === id) {
        return {id, text};
      } else {
        return message;
      }
    });
  }
}
