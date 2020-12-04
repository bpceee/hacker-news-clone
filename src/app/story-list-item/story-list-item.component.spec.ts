import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListItemComponent } from './story-list-item.component';

describe('StoryItemComponent', () => {
  let component: StoryListItemComponent;
  let fixture: ComponentFixture<StoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
