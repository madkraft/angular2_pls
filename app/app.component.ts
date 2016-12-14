import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{ name }}</h1>
    `
})

class AppComponent {
    name:string = 'Hello';
}

export { AppComponent };
