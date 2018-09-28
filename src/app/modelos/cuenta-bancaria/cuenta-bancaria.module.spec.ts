import { CuentaBancariaModule } from './cuenta-bancaria.module';

describe('CuentaBancariaModule', () => {
  let cuentaBancariaModule: CuentaBancariaModule;

  beforeEach(() => {
    cuentaBancariaModule = new CuentaBancariaModule();
  });

  it('should create an instance', () => {
    expect(cuentaBancariaModule).toBeTruthy();
  });
});
