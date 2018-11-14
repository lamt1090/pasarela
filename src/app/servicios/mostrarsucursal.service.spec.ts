import { TestBed } from '@angular/core/testing';

import { MostrarsucursalService } from './mostrarsucursal.service';

describe('MostrarsucursalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarsucursalService = TestBed.get(MostrarsucursalService);
    expect(service).toBeTruthy();
  });
});
