import { TestBed } from '@angular/core/testing';

import { MostrarcategoriaService } from './mostrarcategoria.service';

describe('MostrarcategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarcategoriaService = TestBed.get(MostrarcategoriaService);
    expect(service).toBeTruthy();
  });
});
