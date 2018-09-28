import { PaisModule } from './pais.module';

describe('PaisModule', () => {
  let paisModule: PaisModule;

  beforeEach(() => {
    paisModule = new PaisModule();
  });

  it('should create an instance', () => {
    expect(paisModule).toBeTruthy();
  });
});
