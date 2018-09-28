import { RetiroModule } from './retiro.module';

describe('RetiroModule', () => {
  let retiroModule: RetiroModule;

  beforeEach(() => {
    retiroModule = new RetiroModule();
  });

  it('should create an instance', () => {
    expect(retiroModule).toBeTruthy();
  });
});
