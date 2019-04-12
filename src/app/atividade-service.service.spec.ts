import { TestBed } from '@angular/core/testing';

import { AtividadeServiceService } from './atividade-service.service';

describe('AtividadeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtividadeServiceService = TestBed.get(AtividadeServiceService);
    expect(service).toBeTruthy();
  });
});
