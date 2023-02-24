import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewedSectionComponent } from './last-viewed-section.component';

describe('LastViewedSectionComponent', () => {
  let component: LastViewedSectionComponent;
  let fixture: ComponentFixture<LastViewedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastViewedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastViewedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
