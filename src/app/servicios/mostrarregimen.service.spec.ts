import { TestBed } from '@angular/core/testing';

import { MostrarregimenService } from './mostrarregimen.service';

describe('MostrarregimenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarregimenService = TestBed.get(MostrarregimenService);
    expect(service).toBeTruthy();
  });
});
