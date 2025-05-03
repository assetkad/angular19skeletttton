import { TestBed } from '@angular/core/testing';

import { MySuperService } from './my-super.service';

describe('MySuperService', () => {
  let service: MySuperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySuperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
