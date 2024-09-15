import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltemplateComponent } from './localtemplate.component';

describe('LocaltemplateComponent', () => {
  let component: LocaltemplateComponent;
  let fixture: ComponentFixture<LocaltemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaltemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
