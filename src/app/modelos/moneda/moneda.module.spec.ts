import { MonedaModule } from './moneda.module';

describe('MonedaModule', () => {
  let monedaModule: MonedaModule;

  beforeEach(() => {
    monedaModule = new MonedaModule();
  });

  it('should create an instance', () => {
    expect(monedaModule).toBeTruthy();
  });
});
