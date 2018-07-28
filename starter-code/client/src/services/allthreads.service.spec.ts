import { TestBed, inject } from '@angular/core/testing';

import { AllthreadsService } from './allthreads.service';

describe('AllthreadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllthreadsService]
    });
  });

  it('should be created', inject([AllthreadsService], (service: AllthreadsService) => {
    expect(service).toBeTruthy();
  }));
});
