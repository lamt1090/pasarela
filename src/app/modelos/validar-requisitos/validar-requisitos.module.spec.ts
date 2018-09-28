import { ValidarRequisitosModule } from './validar-requisitos.module';

describe('ValidarRequisitosModule', () => {
  let validarRequisitosModule: ValidarRequisitosModule;

  beforeEach(() => {
    validarRequisitosModule = new ValidarRequisitosModule();
  });

  it('should create an instance', () => {
    expect(validarRequisitosModule).toBeTruthy();
  });
});
