import { TestBed, inject } from '@angular/core/testing';

import { ListeArticleService } from './liste-article.service';

describe('ListeArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeArticleService]
    });
  });

  it('should be created', inject([ListeArticleService], (service: ListeArticleService) => {
    expect(service).toBeTruthy();
  }));
});
