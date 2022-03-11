import { TestBed } from '@angular/core/testing';

import { PlacasServiceService } from './placas-service.service';

describe('PlacasServiceService', () => {
  let service: PlacasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
