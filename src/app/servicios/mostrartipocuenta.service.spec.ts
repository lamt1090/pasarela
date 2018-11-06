import { TestBed } from '@angular/core/testing';

import { MostrartipocuentaService } from './mostrartipocuenta.service';

describe('MostrartipocuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrartipocuentaService = TestBed.get(MostrartipocuentaService);
    expect(service).toBeTruthy();
  });
});
