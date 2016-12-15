import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <input type="text" [value]="currentValue"/>
      <label>{{ label }}</label>
      <button (click)="onDecrement(currentValue)">-</button>
      <button (click)="onIncrement(currentValue)">+</button>
    </div>
  `
})

export class CounterComponent {
  @Input('startValue')
  currentValue: number = 0;

  @Input()
  label: string;

  @Output()
  counterChange = new EventEmitter();

  onDecrement (val: any) {
    const _val = parseInt(val, 10);
    this.currentValue = _val - 1;
    this.counterChange.emit({type: 'dec'});
  }

  onIncrement (val: any) {
    const _val = parseInt(val, 10);
    this.currentValue = _val + 1;
    this.counterChange.emit({type: 'inc'});
  }
}
