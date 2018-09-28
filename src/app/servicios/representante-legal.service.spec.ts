import { TestBed } from '@angular/core/testing';

import { RepresentanteLegalService } from './representante-legal.service';

describe('RepresentanteLegalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepresentanteLegalService = TestBed.get(RepresentanteLegalService);
    expect(service).toBeTruthy();
  });
});
