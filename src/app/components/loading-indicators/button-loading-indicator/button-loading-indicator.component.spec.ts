import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadingIndicatorComponent } from './button-loading-indicator.component';

describe('ButtonLoadingIndicatorComponent', () => {
  let component: ButtonLoadingIndicatorComponent;
  let fixture: ComponentFixture<ButtonLoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLoadingIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
