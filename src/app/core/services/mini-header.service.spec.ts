import { TestBed } from '@angular/core/testing';

import { MiniHeaderService } from './mini-header.service';

describe('MiniHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiniHeaderService = TestBed.get(MiniHeaderService);
    expect(service).toBeTruthy();
  });
});
