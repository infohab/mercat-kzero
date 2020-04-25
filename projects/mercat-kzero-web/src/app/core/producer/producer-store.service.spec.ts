import { TestBed } from '@angular/core/testing';

import { ProducerStoreService } from './producer-store.service';

describe('ProducerStoreService', () => {
  let service: ProducerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
