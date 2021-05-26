import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIdentificadorComponent } from './componente-identificador.component';

describe('ComponenteIdentificadorComponent', () => {
  let component: ComponenteIdentificadorComponent;
  let fixture: ComponentFixture<ComponenteIdentificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteIdentificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteIdentificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
