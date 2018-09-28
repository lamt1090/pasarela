import { TestBed } from '@angular/core/testing';

import { ValidarRequisitosService } from './validar-requisitos.service';

describe('ValidarRequisitosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarRequisitosService = TestBed.get(ValidarRequisitosService);
    expect(service).toBeTruthy();
  });
});
