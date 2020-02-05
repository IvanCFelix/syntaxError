import { TestBed } from '@angular/core/testing';

import { DangersService } from './dangers.service';

describe('DangersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DangersService = TestBed.get(DangersService);
    expect(service).toBeTruthy();
  });
});
