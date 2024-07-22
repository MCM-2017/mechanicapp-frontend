import {TestBed} from '@angular/core/testing';

import {IconConfigurationService} from './icon-configuration.service';

describe('IconConfigurationService', () => {
  let service: IconConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
