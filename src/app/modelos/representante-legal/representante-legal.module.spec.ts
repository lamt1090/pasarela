import { RepresentanteLegalModule } from './representante-legal.module';

describe('RepresentanteLegalModule', () => {
  let representanteLegalModule: RepresentanteLegalModule;

  beforeEach(() => {
    representanteLegalModule = new RepresentanteLegalModule();
  });

  it('should create an instance', () => {
    expect(representanteLegalModule).toBeTruthy();
  });
});
