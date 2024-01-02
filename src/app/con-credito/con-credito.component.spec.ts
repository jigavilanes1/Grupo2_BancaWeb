import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCreditoComponent } from './con-credito.component';

describe('ConCreditoComponent', () => {
  let component: ConCreditoComponent;
  let fixture: ComponentFixture<ConCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
