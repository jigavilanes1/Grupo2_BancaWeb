import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCuentasComponent } from './producto-cuentas.component';

describe('ProductoCuentasComponent', () => {
  let component: ProductoCuentasComponent;
  let fixture: ComponentFixture<ProductoCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCuentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
