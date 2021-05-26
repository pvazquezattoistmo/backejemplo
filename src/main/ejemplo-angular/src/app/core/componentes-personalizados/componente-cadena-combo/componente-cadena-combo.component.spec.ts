import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ComponenteCadenaComboComponent} from './componente-cadena-combo.component';

describe('ComponenteCadenaComboComponent', () => {
  let component: ComponenteCadenaComboComponent;
  let fixture: ComponentFixture<ComponenteCadenaComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCadenaComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCadenaComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
