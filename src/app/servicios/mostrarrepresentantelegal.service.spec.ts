import { TestBed } from '@angular/core/testing';

import { MostrarrepresentantelegalService } from './mostrarrepresentantelegal.service';

describe('MostrarrepresentantelegalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarrepresentantelegalService = TestBed.get(MostrarrepresentantelegalService);
    expect(service).toBeTruthy();
  });
});
