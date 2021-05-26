import { AlmacenEvaluacionModule } from './almacen-evaluacion.module';

describe('AlmacenEvaluacionModule', () => {
  let almacenEvaluacionModule: AlmacenEvaluacionModule;

  beforeEach(() => {
    almacenEvaluacionModule = new AlmacenEvaluacionModule();
  });

  it('should create an instance', () => {
    expect(almacenEvaluacionModule).toBeTruthy();
  });
});
