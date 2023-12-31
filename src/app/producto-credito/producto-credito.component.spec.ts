import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCreditoComponent } from './producto-credito.component';

describe('ProductoCreditoComponent', () => {
  let component: ProductoCreditoComponent;
  let fixture: ComponentFixture<ProductoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
