import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StoryService } from './story.service';

describe('StoryService', () => {
  let service: StoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(StoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
