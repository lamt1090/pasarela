import { TestBed } from '@angular/core/testing';

import { CuentaBancariaService } from './cuenta-bancaria.service';

describe('CuentaBancariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuentaBancariaService = TestBed.get(CuentaBancariaService);
    expect(service).toBeTruthy();
  });
});
