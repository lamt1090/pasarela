import { TestBed } from '@angular/core/testing';

import { MostrarrequisitoService } from './mostrarrequisito.service';

describe('MostrarrequisitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarrequisitoService = TestBed.get(MostrarrequisitoService);
    expect(service).toBeTruthy();
  });
});
