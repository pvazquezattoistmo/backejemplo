import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCheckComponent } from './componente-check.component';

describe('ComponenteCheckComponent', () => {
  let component: ComponenteCheckComponent;
  let fixture: ComponentFixture<ComponenteCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
