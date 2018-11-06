import { TestBed } from '@angular/core/testing';

import { MostrarsubcategoriaService } from './mostrarsubcategoria.service';

describe('MostrarsubcategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarsubcategoriaService = TestBed.get(MostrarsubcategoriaService);
    expect(service).toBeTruthy();
  });
});
