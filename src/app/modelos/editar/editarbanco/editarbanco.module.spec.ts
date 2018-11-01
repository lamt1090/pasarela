import { EditarbancoModule } from './editarbanco.module';

describe('EditarbancoModule', () => {
  let editarbancoModule: EditarbancoModule;

  beforeEach(() => {
    editarbancoModule = new EditarbancoModule();
  });

  it('should create an instance', () => {
    expect(editarbancoModule).toBeTruthy();
  });
});
