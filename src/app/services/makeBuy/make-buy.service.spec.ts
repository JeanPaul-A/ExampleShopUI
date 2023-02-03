import { TestBed } from '@angular/core/testing';

import { MakeBuyService } from './make-buy.service';

describe('MakeBuyService', () => {
  let service: MakeBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
