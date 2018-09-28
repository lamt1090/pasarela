import { ComercioModule } from './comercio.module';

describe('ComercioModule', () => {
  let comercioModule: ComercioModule;

  beforeEach(() => {
    comercioModule = new ComercioModule();
  });

  it('should create an instance', () => {
    expect(comercioModule).toBeTruthy();
  });
});
