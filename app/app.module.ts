import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RoomsSelectComponent }  from './components/rooms-select/rooms-select.component';
import { ChildrenComponent }  from './components/children/children.component';
import { CounterComponent }  from './components/counter/counter.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    RoomsSelectComponent,
    ChildrenComponent,
    CounterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
