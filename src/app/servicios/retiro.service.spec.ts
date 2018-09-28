import { TestBed } from '@angular/core/testing';

import { RetiroService } from './retiro.service';

describe('RetiroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetiroService = TestBed.get(RetiroService);
    expect(service).toBeTruthy();
  });
});
