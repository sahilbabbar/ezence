import { TestBed } from '@angular/core/testing';

import { EzdHomeService } from './ezd-home.service';

describe('EzdHomeService', () => {
  let service: EzdHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzdHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
