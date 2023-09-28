// src/app/second-component/second-component.component.ts
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: ` <div>{{ data | json }}</div> `,
})
export class SecondComponentComponent implements OnInit {
  @Input() data!: number[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.cdr.detectChanges();
    }, 200);
  }
}
