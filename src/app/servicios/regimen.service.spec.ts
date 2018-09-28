import { TestBed } from '@angular/core/testing';

import { RegimenService } from './regimen.service';

describe('RegimenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegimenService = TestBed.get(RegimenService);
    expect(service).toBeTruthy();
  });
});
