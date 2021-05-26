import { TestBed } from '@angular/core/testing';

import { AlmacenEvaluacionService } from './almacen-evaluacion.service';

describe('AlmacenEvaluacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmacenEvaluacionService = TestBed.get(AlmacenEvaluacionService);
    expect(service).toBeTruthy();
  });
});
