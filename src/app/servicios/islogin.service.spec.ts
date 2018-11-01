import { TestBed } from '@angular/core/testing';

import { IsloginService } from './islogin.service';

describe('IsloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsloginService = TestBed.get(IsloginService);
    expect(service).toBeTruthy();
  });
});
