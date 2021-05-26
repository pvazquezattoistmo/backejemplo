import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TejidosProcuracionComponent } from './tejidos-procuracion.component';

describe('TejidosProcuracionComponent', () => {
  let component: TejidosProcuracionComponent;
  let fixture: ComponentFixture<TejidosProcuracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TejidosProcuracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TejidosProcuracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
