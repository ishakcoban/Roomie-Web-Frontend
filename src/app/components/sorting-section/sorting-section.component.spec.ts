import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingSectionComponent } from './sorting-section.component';

describe('SortingSectionComponent', () => {
  let component: SortingSectionComponent;
  let fixture: ComponentFixture<SortingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
