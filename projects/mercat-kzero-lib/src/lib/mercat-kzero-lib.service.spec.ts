import { TestBed } from '@angular/core/testing'

import { MercatKzeroLibService } from './mercat-kzero-lib.service'

describe('MercatKzeroLibService', () => {
  let service: MercatKzeroLibService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MercatKzeroLibService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
