import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFechaComponent } from './componente-fecha.component';

describe('ComponenteFechaComponent', () => {
  let component: ComponenteFechaComponent;
  let fixture: ComponentFixture<ComponenteFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
