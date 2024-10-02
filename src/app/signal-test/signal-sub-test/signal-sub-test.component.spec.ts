import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSubTestComponent } from './signal-sub-test.component';

describe('SignalSubTestComponent', () => {
  let component: SignalSubTestComponent;
  let fixture: ComponentFixture<SignalSubTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalSubTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSubTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
