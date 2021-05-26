import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDonanteExtraccionComponent } from './detalle-donante-extraccion.component';

describe('DetalleDonanteExtraccionComponent', () => {
  let component: DetalleDonanteExtraccionComponent;
  let fixture: ComponentFixture<DetalleDonanteExtraccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDonanteExtraccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDonanteExtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
