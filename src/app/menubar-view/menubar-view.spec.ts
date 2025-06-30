import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarView } from './menubar-view';

describe('MenubarView', () => {
  let component: MenubarView;
  let fixture: ComponentFixture<MenubarView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
