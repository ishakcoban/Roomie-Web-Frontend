import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDesignComponent } from './input-design.component';

describe('InputDesignComponent', () => {
  let component: InputDesignComponent;
  let fixture: ComponentFixture<InputDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
