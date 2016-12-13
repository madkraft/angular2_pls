import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>{{ pageTitle }}</div>
    `
})

class AppComponent {
    pageTitle: string = `Prod Management`;
}

export { AppComponent };
