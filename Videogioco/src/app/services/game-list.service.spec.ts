import { TestBed } from '@angular/core/testing';

import { GamesListService } from './game-list.service';

describe('GameListService', () => {
  let service: GamesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
