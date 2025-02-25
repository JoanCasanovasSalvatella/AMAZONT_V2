import { TestBed } from '@angular/core/testing';

import { AmazontService } from './amazont.service';

describe('AmazontService', () => {
  let service: AmazontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
