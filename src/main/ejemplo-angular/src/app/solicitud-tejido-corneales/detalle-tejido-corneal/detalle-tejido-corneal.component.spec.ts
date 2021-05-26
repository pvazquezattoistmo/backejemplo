import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTejidoCornealComponent } from './detalle-tejido-corneal.component';

describe('DetalleTejidoCornealComponent', () => {
  let component: DetalleTejidoCornealComponent;
  let fixture: ComponentFixture<DetalleTejidoCornealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTejidoCornealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTejidoCornealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
