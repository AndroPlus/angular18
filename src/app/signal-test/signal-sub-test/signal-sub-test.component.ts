import { Component, effect, inject, signal } from '@angular/core';
import { SignalTestService } from '../../signal-test.service';

@Component({
  selector: 'app-signal-sub-test',
  standalone: true,
  imports: [],
  templateUrl: './signal-sub-test.component.html',
  styleUrl: './signal-sub-test.component.scss'
})
export class SignalSubTestComponent {

  //singleTestService = inject(SignalTestService) // another way of injecting service

  localData: any
  normalCount: any

  constructor(private singleTestService: SignalTestService) { // traditional way of injecting

    effect(()=>{
      this.localData = this.singleTestService.count()
    })


  }

  ngOnInit() {
    this.normalCount = this.singleTestService.normalCount
  }
  
}
