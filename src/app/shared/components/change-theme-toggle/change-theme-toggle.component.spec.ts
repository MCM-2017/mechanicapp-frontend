import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeThemeToggleComponent } from './change-theme-toggle.component';

describe('ChangeThemeToggleComponent', () => {
  let component: ChangeThemeToggleComponent;
  let fixture: ComponentFixture<ChangeThemeToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeThemeToggleComponent]
    });
    fixture = TestBed.createComponent(ChangeThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
