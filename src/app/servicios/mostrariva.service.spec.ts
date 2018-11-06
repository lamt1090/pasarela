import { TestBed } from '@angular/core/testing';

import { MostrarivaService } from './mostrariva.service';

describe('MostrarivaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarivaService = TestBed.get(MostrarivaService);
    expect(service).toBeTruthy();
  });
});
