import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDoCardsComponent } from './we-do-cards.component';

describe('WeDoCardsComponent', () => {
  let component: WeDoCardsComponent;
  let fixture: ComponentFixture<WeDoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeDoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
