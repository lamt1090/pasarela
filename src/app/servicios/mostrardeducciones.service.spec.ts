import { TestBed } from '@angular/core/testing';

import { MostrardeduccionesService } from './mostrardeducciones.service';

describe('MostrardeduccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrardeduccionesService = TestBed.get(MostrardeduccionesService);
    expect(service).toBeTruthy();
  });
});
