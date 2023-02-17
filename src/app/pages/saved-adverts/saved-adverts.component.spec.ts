import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAdvertsComponent } from './saved-adverts.component';

describe('SavedAdvertsComponent', () => {
  let component: SavedAdvertsComponent;
  let fixture: ComponentFixture<SavedAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedAdvertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
