import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePagoCuentaComponent } from './detalle-pago-cuenta.component';

describe('DetallePagoCuentaComponent', () => {
  let component: DetallePagoCuentaComponent;
  let fixture: ComponentFixture<DetallePagoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePagoCuentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallePagoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
