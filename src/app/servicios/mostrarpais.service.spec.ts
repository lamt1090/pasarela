import { TestBed } from '@angular/core/testing';

import { MostrarpaisService } from './mostrarpais.service';

describe('MostrarpaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarpaisService = TestBed.get(MostrarpaisService);
    expect(service).toBeTruthy();
  });
});
