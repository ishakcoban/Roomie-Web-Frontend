import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterSectionComponent } from './help-center-section.component';

describe('HelpCenterSectionComponent', () => {
  let component: HelpCenterSectionComponent;
  let fixture: ComponentFixture<HelpCenterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpCenterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
