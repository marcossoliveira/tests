import { TestBed } from '@angular/core/testing';

import { ColetasService } from './coletas.service';

describe('ColetasService', () => {
  let service: ColetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
