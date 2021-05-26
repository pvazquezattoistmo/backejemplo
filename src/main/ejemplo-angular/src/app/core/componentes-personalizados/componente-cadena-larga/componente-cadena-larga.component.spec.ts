import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCadenaLargaComponent } from './componente-cadena-larga.component';

describe('ComponenteCadenaLargaComponent', () => {
  let component: ComponenteCadenaLargaComponent;
  let fixture: ComponentFixture<ComponenteCadenaLargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCadenaLargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCadenaLargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
