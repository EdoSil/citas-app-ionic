import { TestBed } from '@angular/core/testing';

import { Configuraciones } from './configuraciones';

describe('Configuraciones', () => {
  let service: Configuraciones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Configuraciones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
