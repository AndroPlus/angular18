import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/counter.actions';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngrx-test.component.html',
  styleUrl: './ngrx-test.component.scss'
})
export class NgrxTestComponent {
  count$ = of(0)
  ngOnInit() {
    this.count$ = this.store.select('count');
  }

  constructor(private store: Store<{ count: number }>) {
    
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
