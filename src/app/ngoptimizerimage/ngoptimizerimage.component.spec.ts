import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoptimizerimageComponent } from './ngoptimizerimage.component';

describe('NgoptimizerimageComponent', () => {
  let component: NgoptimizerimageComponent;
  let fixture: ComponentFixture<NgoptimizerimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgoptimizerimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoptimizerimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
