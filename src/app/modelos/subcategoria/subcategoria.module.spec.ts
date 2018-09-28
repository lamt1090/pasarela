import { SubcategoriaModule } from './subcategoria.module';

describe('SubcategoriaModule', () => {
  let subcategoriaModule: SubcategoriaModule;

  beforeEach(() => {
    subcategoriaModule = new SubcategoriaModule();
  });

  it('should create an instance', () => {
    expect(subcategoriaModule).toBeTruthy();
  });
});
