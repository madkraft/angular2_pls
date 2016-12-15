import { Component, Input } from '@angular/core';

@Component({
  selector: 'children',
  styles: [`
    .children {
      background: pink;
    }
  `],
  template: `
    <div class="children" *ngFor="let kid of kids; let i = index;">
      Child {{ i+1 }} - age {{ kid.age }}
    </div>
  `
})

export class ChildrenComponent {
  @Input()
  kids: Array<any>;
}
