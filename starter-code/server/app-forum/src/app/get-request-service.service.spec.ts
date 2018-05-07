/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetRequestServiceService } from './get-request-service.service';

describe('Service: GetRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRequestServiceService]
    });
  });

  it('should ...', inject([GetRequestServiceService], (service: GetRequestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
