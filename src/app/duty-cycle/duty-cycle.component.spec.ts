import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyCycleComponent } from './duty-cycle.component';

describe('DutyCycleComponent', () => {
  let component: DutyCycleComponent;
  let fixture: ComponentFixture<DutyCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
