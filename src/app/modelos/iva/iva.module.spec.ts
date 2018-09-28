import { IvaModule } from './iva.module';

describe('IvaModule', () => {
  let ivaModule: IvaModule;

  beforeEach(() => {
    ivaModule = new IvaModule();
  });

  it('should create an instance', () => {
    expect(ivaModule).toBeTruthy();
  });
});
