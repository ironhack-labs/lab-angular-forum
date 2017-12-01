import { TestBed, inject } from '@angular/core/testing';

import { IsLoggedIn.CanactivateService } from './is-logged-in.canactivate.service';

describe('IsLoggedIn.CanactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedIn.CanactivateService]
    });
  });

  it('should be created', inject([IsLoggedIn.CanactivateService], (service: IsLoggedIn.CanactivateService) => {
    expect(service).toBeTruthy();
  }));
});
