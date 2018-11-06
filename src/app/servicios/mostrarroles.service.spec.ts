import { TestBed } from '@angular/core/testing';

import { MostrarrolesService } from './mostrarroles.service';

describe('MostrarrolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarrolesService = TestBed.get(MostrarrolesService);
    expect(service).toBeTruthy();
  });
});
