import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionSliderComponent } from './transition-slider.component';

describe('TransitionSliderComponent', () => {
  let component: TransitionSliderComponent;
  let fixture: ComponentFixture<TransitionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
