import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCadenaComponent } from './componente-cadena.component';

describe('ComponenteCadenaComponent', () => {
  let component: ComponenteCadenaComponent;
  let fixture: ComponentFixture<ComponenteCadenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCadenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCadenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
