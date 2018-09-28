import { TestBed } from '@angular/core/testing';

import { EstadoRequisitoService } from './estado-requisito.service';

describe('EstadoRequisitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoRequisitoService = TestBed.get(EstadoRequisitoService);
    expect(service).toBeTruthy();
  });
});
