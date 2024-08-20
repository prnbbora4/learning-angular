import { TestBed } from '@angular/core/testing';

import { ContactFormControllerService } from './contact-form-controller.service';

describe('ContactFormControllerService', () => {
  let service: ContactFormControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
