import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCreditoComponent } from './historial-credito.component';

describe('HistorialCreditoComponent', () => {
  let component: HistorialCreditoComponent;
  let fixture: ComponentFixture<HistorialCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
