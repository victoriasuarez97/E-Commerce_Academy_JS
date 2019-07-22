import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosdestacadosComponent } from './productosdestacados.component';

describe('ProductosdestacadosComponent', () => {
  let component: ProductosdestacadosComponent;
  let fixture: ComponentFixture<ProductosdestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosdestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosdestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
