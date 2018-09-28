import { EstadoRequisitoModule } from './estado-requisito.module';

describe('EstadoRequisitoModule', () => {
  let estadoRequisitoModule: EstadoRequisitoModule;

  beforeEach(() => {
    estadoRequisitoModule = new EstadoRequisitoModule();
  });

  it('should create an instance', () => {
    expect(estadoRequisitoModule).toBeTruthy();
  });
});
