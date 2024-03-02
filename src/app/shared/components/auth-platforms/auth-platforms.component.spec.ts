import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPlatformsComponent } from './auth-platforms.component';

describe('AuthPlatformsComponent', () => {
  let component: AuthPlatformsComponent;
  let fixture: ComponentFixture<AuthPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
