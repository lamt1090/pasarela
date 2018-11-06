import { TestBed } from '@angular/core/testing';

import { MostrarcomercioService } from './mostrarcomercio.service';

describe('MostrarcomercioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarcomercioService = TestBed.get(MostrarcomercioService);
    expect(service).toBeTruthy();
  });
});
