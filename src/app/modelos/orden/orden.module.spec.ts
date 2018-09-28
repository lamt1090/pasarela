import { OrdenModule } from './orden.module';

describe('OrdenModule', () => {
  let ordenModule: OrdenModule;

  beforeEach(() => {
    ordenModule = new OrdenModule();
  });

  it('should create an instance', () => {
    expect(ordenModule).toBeTruthy();
  });
});
