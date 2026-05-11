import { TestBed } from '@angular/core/testing';

import { BankServiceTs } from './bank.service.ts';

describe('BankServiceTs', () => {
  let service: BankServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
