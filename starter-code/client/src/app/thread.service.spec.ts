/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThreadService } from './thread.service';

describe('Service: Thread', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadService]
    });
  });

  it('should ...', inject([ThreadService], (service: ThreadService) => {
    expect(service).toBeTruthy();
  }));
});
