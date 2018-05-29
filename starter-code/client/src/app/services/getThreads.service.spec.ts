/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetThreadsService } from './getThreads.service';

describe('Service: GetThreads', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetThreadsService]
    });
  });

  it('should ...', inject([GetThreadsService], (service: GetThreadsService) => {
    expect(service).toBeTruthy();
  }));
});
