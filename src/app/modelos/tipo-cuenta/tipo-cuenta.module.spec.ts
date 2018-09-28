import { TipoCuentaModule } from './tipo-cuenta.module';

describe('TipoCuentaModule', () => {
  let tipoCuentaModule: TipoCuentaModule;

  beforeEach(() => {
    tipoCuentaModule = new TipoCuentaModule();
  });

  it('should create an instance', () => {
    expect(tipoCuentaModule).toBeTruthy();
  });
});
