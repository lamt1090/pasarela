import { CiudadModule } from './ciudad.module';

describe('CiudadModule', () => {
  let ciudadModule: CiudadModule;

  beforeEach(() => {
    ciudadModule = new CiudadModule();
  });

  it('should create an instance', () => {
    expect(ciudadModule).toBeTruthy();
  });
});
