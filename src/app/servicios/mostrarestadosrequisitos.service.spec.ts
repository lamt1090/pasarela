import { TestBed } from '@angular/core/testing';

import { MostrarestadosrequisitosService } from './mostrarestadosrequisitos.service';

describe('MostrarestadosrequisitosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarestadosrequisitosService = TestBed.get(MostrarestadosrequisitosService);
    expect(service).toBeTruthy();
  });
});
