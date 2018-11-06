import { TestBed } from '@angular/core/testing';

import { MostrarmonedasService } from './mostrarmonedas.service';

describe('MostrarmonedasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarmonedasService = TestBed.get(MostrarmonedasService);
    expect(service).toBeTruthy();
  });
});
