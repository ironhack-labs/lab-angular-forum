/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThreadsServiceService } from './threads-service.service';

describe('Service: ThreadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadsServiceService]
    });
  });

  it('should ...', inject([ThreadsServiceService], (service: ThreadsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
