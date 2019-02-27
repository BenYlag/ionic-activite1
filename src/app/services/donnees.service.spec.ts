import { TestBed } from '@angular/core/testing';

import { DonneesService } from './donnees.service';

describe('DonneesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonneesService = TestBed.get(DonneesService);
    expect(service).toBeTruthy();
  });
});
