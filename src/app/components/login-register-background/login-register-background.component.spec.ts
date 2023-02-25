import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterBackgroundComponent } from './login-register-background.component';

describe('LoginRegisterBackgroundComponent', () => {
  let component: LoginRegisterBackgroundComponent;
  let fixture: ComponentFixture<LoginRegisterBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
