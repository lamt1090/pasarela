import { TestBed } from '@angular/core/testing';

import { TipoCuentaService } from './tipo-cuenta.service';

describe('TipoCuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoCuentaService = TestBed.get(TipoCuentaService);
    expect(service).toBeTruthy();
  });
});
