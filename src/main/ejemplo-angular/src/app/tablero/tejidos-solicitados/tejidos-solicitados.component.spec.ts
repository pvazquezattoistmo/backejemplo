import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TejidosSolicitadosComponent } from './tejidos-solicitados.component';

describe('TejidosSolicitadosComponent', () => {
  let component: TejidosSolicitadosComponent;
  let fixture: ComponentFixture<TejidosSolicitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TejidosSolicitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TejidosSolicitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
