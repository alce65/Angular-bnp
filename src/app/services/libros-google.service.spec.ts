import { TestBed } from '@angular/core/testing';

import { LibrosGoogleService } from './libros-google.service';

describe('LibrosGoogleService', () => {
  let service: LibrosGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
