import { Component, inject, input, signal } from '@angular/core';
import { SignalTestService } from '../signal-test.service';
import { Book } from './book';

@Component({
  selector: 'app-signal-test',
  standalone: true,
  imports: [],
  templateUrl: './signal-test.component.html',
  styleUrl: './signal-test.component.scss'
})
export class SignalTestComponent {

  singleTestService = inject(SignalTestService)

  book = input<Book>(); 

  bookRequired = input.required<Book>(); 

  bookAlias = input<Book>({}, {alias: "bookAliasInput",}); 

  bookalreq = input.required<Book>({alias: "bookAliasInputRequired"}); 

  constructor() {}

  ngOnInit() {}
  
  increment() {
    this.singleTestService.increment();
  }

  decrement() {
    this.singleTestService.decrement();
  }

  reset() {
    this.singleTestService.reset();
  }
}
