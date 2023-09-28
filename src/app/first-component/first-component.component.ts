// src/app/first-component/first-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
    <app-second-component
      *ngFor="let innerArray of getNestedArray()"
      [data]="innerArray"
    ></app-second-component>
  `,
})
export class FirstComponentComponent {
  getNestedArray(): number[][] {
    console.log('getNestedArray');
    return [
      [1, 2],
      [3, 4],
    ];
  }
}
