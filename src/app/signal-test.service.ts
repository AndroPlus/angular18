import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalTestService {

  
  count = signal(0);

  normalCount = 0
  
  constructor() { }

  increment() {
    this.count.update(value => value + 1);
    this.normalCount = this.normalCount + 1;
  }

  decrement() {
    this.count.update(value => value - 1);
    this.normalCount = this.normalCount  - 1;
  }

  reset() {
    this.count.set(0);
    this.normalCount = 0;
  }
}
