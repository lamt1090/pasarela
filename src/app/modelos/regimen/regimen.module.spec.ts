import { RegimenModule } from './regimen.module';

describe('RegimenModule', () => {
  let regimenModule: RegimenModule;

  beforeEach(() => {
    regimenModule = new RegimenModule();
  });

  it('should create an instance', () => {
    expect(regimenModule).toBeTruthy();
  });
});
