import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupForm } from './user-signup-form';

describe('UserSignupForm', () => {
  let component: UserSignupForm;
  let fixture: ComponentFixture<UserSignupForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSignupForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignupForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
