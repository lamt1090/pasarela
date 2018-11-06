import { TestBed } from '@angular/core/testing';

import { MostrardepartamentoService } from './mostrardepartamento.service';

describe('MostrardepartamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrardepartamentoService = TestBed.get(MostrardepartamentoService);
    expect(service).toBeTruthy();
  });
});
