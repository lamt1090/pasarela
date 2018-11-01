import { ValidoModule } from './valido.module';

describe('ValidoModule', () => {
  let validoModule: ValidoModule;

  beforeEach(() => {
    validoModule = new ValidoModule();
  });

  it('should create an instance', () => {
    expect(validoModule).toBeTruthy();
  });
});
