import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDoCardComponent } from './we-do-card.component';

describe('WeDoCardComponent', () => {
  let component: WeDoCardComponent;
  let fixture: ComponentFixture<WeDoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeDoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
