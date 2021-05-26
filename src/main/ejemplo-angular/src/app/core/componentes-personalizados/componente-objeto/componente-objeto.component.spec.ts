import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ComponenteObjetoComponent} from './componente-objeto.component';

describe('ComponenteObjetoComponent', () => {
  let component: ComponenteObjetoComponent;
  let fixture: ComponentFixture<ComponenteObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
