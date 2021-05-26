import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSolictudTejidoComponent } from './ingreso-solictud-tejido.component';

describe('IngresoSolictudTejidoComponent', () => {
  let component: IngresoSolictudTejidoComponent;
  let fixture: ComponentFixture<IngresoSolictudTejidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoSolictudTejidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoSolictudTejidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
