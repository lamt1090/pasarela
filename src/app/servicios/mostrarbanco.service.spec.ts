import { TestBed } from '@angular/core/testing';

import { MostrarbancoService } from './mostrarbanco.service';

describe('MostrarbancoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarbancoService = TestBed.get(MostrarbancoService);
    expect(service).toBeTruthy();
  });
});
