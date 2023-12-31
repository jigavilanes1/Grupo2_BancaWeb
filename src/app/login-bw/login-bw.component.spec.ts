import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBwComponent } from './login-bw.component';

describe('LoginBwComponent', () => {
  let component: LoginBwComponent;
  let fixture: ComponentFixture<LoginBwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginBwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
