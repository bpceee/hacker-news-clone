import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryInfoComponent } from './story-info.component';

describe('StoryInfoComponent', () => {
  let component: StoryInfoComponent;
  let fixture: ComponentFixture<StoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
