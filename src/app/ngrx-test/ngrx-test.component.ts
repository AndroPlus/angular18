import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, concatMap, delay, exhaustMap, mergeMap, Observable, of, ReplaySubject, Subject, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-ngrx-test',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './ngrx-test.component.html',
  styleUrl: './ngrx-test.component.scss'
})
export class NgrxTestComponent implements OnInit {

  subject: Subject<number>  = new Subject<number>();
  behaviourSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  asyncSubject: AsyncSubject<number> = new AsyncSubject<number>();
  replaySubject: ReplaySubject<number> = new ReplaySubject<number>(2);
  subscriberList:Subscription[] = [];

  results : string = '';
  constructor() {
    console.log("NGX Rx constructor called")
  }

  ngOnInit() {
    let observables = new Observable(subscriber=>{
      subscriber.next(1);
      subscriber.next();
      subscriber.complete();
    })

    this.subscriberList.push(observables.subscribe({
      next: (value: any) => console.log('Next value:', value),
      error: (err: any) => console.error('Error:', err),
      complete: () => console.log('Completed')
    }));

    this.subject?.next(2);
    this.subject?.asObservable().subscribe((value)=> console.log("subject-",value))
    

    
    this.behaviourSubject.asObservable().subscribe((value)=> console.log("behaviourSubject-",value))
    this.behaviourSubject?.next(2);
    this.behaviourSubject?.next(2);
    
    this.behaviourSubject.asObservable().subscribe((value)=> console.log("behaviourSubject1-",value))

    this.asyncSubject.next(4);
    this.asyncSubject.next(6);
    this.asyncSubject.asObservable().subscribe((value)=> console.log("asyncSubject-",value))

    this.asyncSubject.complete();


    this.replaySubject.next(4);
    this.replaySubject.next(6);
    this.replaySubject.asObservable().subscribe((value)=> console.log("replaySubject-",value))


of(1, 2, 3)
  .pipe(
    switchMap(val => of(`Processed switchMap ${val}`).pipe(delay(1000 * val)))  // Inner observables with delay
  )
  .subscribe(result => this.results = result);


  
of(1, 2, 3)
.pipe(
  mergeMap(val => of(`Processed mergeMap ${val}`).pipe(delay(1000 * val)))  // Inner observables with delay
)
.subscribe(result => this.results = result);

of(1, 2, 3)
.pipe(
  exhaustMap(val => of(`Processed exhaustMap ${val}`).pipe(delay(1000 * val)))  // Inner observables with delay
)
.subscribe(result => this.results = result);


// sequence 
of(1, 2, 3)
.pipe(
  concatMap(val => of(`Processed concatMap ${val}`).pipe(delay(1000 * val)))  // Inner observables with delay
)
.subscribe(result => this.results = result);


    console.log("NGX Rx ngOnInit called")
  }

  ngOnChanges() {
    console.log("NGX Rx ngOnChanges called")
  }

  ngDoCheck() {
    console.log("NGX Rx ngDoCheck called")
  }

  ngAfterContentInit() {
    console.log("NGX Rx ngAfterContentInit called")
  }
  ngAfterContentChecked() {
    console.log("NGX Rx ngAfterContentChecked called")
  }

  ngAfterViewInit() {
    console.log("NGX Rx ngAfterViewInit called")
  }
  ngAfterViewChecked() {
    console.log("NGX Rx ngAfterViewChecked called")
  }

  afterRender() {
    console.log("NGX Rx afterRender called")
  }
  afterNextRender() {
    console.log("NGX Rx afterNextRender called")
  }

  ngOnDestroy() {
    console.log("NGX Rx ngOnDestroy / unsubscribecalled")
    this.subscriberList.pop()?.unsubscribe();
  }
}
