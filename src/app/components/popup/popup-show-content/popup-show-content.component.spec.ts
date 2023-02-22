import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupShowContentComponent } from './popup-show-content.component';

describe('PopupShowContentComponent', () => {
  let component: PopupShowContentComponent;
  let fixture: ComponentFixture<PopupShowContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupShowContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupShowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
