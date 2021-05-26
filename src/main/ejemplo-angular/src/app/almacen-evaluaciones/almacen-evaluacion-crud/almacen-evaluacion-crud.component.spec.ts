import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenEvaluacionCrudComponent } from './almacen-evaluacion-crud.component';

describe('AlmacenEvaluacionCrudComponent', () => {
  let component: AlmacenEvaluacionCrudComponent;
  let fixture: ComponentFixture<AlmacenEvaluacionCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenEvaluacionCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenEvaluacionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
