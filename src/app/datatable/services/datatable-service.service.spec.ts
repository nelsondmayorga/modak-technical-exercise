import { TestBed } from '@angular/core/testing';

import { DatatableServiceService } from './datatable-service.service';

describe('DatatableServiceService', () => {
  let service: DatatableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
