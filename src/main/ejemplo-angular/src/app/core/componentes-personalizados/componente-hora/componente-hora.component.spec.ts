import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHoraComponent } from './componente-hora.component';

describe('ComponenteHoraComponent', () => {
  let component: ComponenteHoraComponent;
  let fixture: ComponentFixture<ComponenteHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
