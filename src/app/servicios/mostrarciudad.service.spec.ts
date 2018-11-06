import { TestBed } from '@angular/core/testing';

import { MostrarciudadService } from './mostrarciudad.service';

describe('MostrarciudadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarciudadService = TestBed.get(MostrarciudadService);
    expect(service).toBeTruthy();
  });
});
