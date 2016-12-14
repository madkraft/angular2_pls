import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SimpleFormComponent }  from './components/simple-form.component';
import { MailService } from './services/mail.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [
    MailService,
    {provide: 'api', useValue: 'http://localhost:3000/'}
  ],
  declarations: [ AppComponent, SimpleFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
