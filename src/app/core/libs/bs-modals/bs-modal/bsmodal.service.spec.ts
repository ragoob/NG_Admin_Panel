import { TestBed } from '@angular/core/testing';

import { BsmodalService } from './bsmodal.service';

describe('BsmodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BsmodalService = TestBed.get(BsmodalService);
    expect(service).toBeTruthy();
  });
});
