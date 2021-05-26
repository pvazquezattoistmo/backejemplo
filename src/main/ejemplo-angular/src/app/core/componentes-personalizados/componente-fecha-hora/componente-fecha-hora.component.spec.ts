import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFechaHoraComponent } from './componente-fecha-hora.component';

describe('ComponenteFechaHoraComponent', () => {
  let component: ComponenteFechaHoraComponent;
  let fixture: ComponentFixture<ComponenteFechaHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteFechaHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteFechaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
