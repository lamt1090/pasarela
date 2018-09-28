import { TestBed } from '@angular/core/testing';

import { DeduccionService } from './deduccion.service';

describe('DeduccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeduccionService = TestBed.get(DeduccionService);
    expect(service).toBeTruthy();
  });
});
