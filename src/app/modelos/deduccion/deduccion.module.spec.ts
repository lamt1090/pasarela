import { DeduccionModule } from './deduccion.module';

describe('DeduccionModule', () => {
  let deduccionModule: DeduccionModule;

  beforeEach(() => {
    deduccionModule = new DeduccionModule();
  });

  it('should create an instance', () => {
    expect(deduccionModule).toBeTruthy();
  });
});
